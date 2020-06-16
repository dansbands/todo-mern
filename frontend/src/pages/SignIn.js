import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../components/Layout";
import { ErrorMessage, SignInForm } from "../styles";
import apiFetch from "../utils/apiFetch";
// import PropTypes from 'prop-types'

const SignIn = (props) => {
  const [email, updateEmail] = useState("newuser@test.com");
  const [password, updatePassword] = useState("123");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(null);

  function submitUser(e) {
    e.preventDefault();
    setError(null)
    const user = {
      email,
      password,
    };
    const options = {
      method: "POST",
      body: { ...user },
    };
    console.log("Submit User", user);
    return apiFetch(`signin`, options)
      .catch((error) => {
        console.log("Client ERROR!!!", error);
      })
      .then((json) => {
        if (json && json.error) setError(json.error);
        localStorage.token = json.token
        console.log("Sign In JSON", json);
      })
      .then(() => setRedirect(true));
  }

  return (
    <Layout title="Sign In">
      <h3>Sign In</h3>
      <SignInForm onSubmit={submitUser}>
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          required
          id="email"
          value={email}
          onChange={(e) => updateEmail(e.target.value)}
          placeholder="JaneDoe@MySite.com..."
        />
        <br />

        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          required
          id="password"
          value={password}
          onChange={(e) => updatePassword(e.target.value)}
        />
        <br />
      {error && <ErrorMessage>Error - {error}</ErrorMessage>}
        <button type="submit">Sign In</button>
      {!error && redirect && <Redirect to="/todos" />}
        <br />
        <Link to="/signup">Not a member? Sign up instead.</Link>
      </SignInForm>
    </Layout>
  );
};

export default SignIn;
