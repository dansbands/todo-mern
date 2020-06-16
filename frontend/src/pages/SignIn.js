import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../components/Layout";
import { SignInForm } from "../styles";

// import PropTypes from 'prop-types'

const SignIn = (props) => {
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  function submitUser(e) {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    console.log("Submit User", data);
    setRedirect(true);
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

        <button type="submit">Sign In</button>
        {redirect && <Redirect to="/todos" />}
        <br/>
        <Link to="/signup">Not a member? Sign up instead.</Link>
      </SignInForm>
    </Layout>
  );
};

export default SignIn;
