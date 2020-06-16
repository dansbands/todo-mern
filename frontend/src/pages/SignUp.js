import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../components/Layout";
import { ErrorMessage, SignInForm } from "../styles";
import apiFetch from "../utils/apiFetch";
// import PropTypes from 'prop-types'

const SignUp = (props) => {
  const [firstName, updateFirstName] = useState("Default");
  const [lastName, updateLastName] = useState("User");
  const [email, updateEmail] = useState("user@test.com");
  const [password, updatePassword] = useState("123");
  const [confirmPassword, updateConfirmPassword] = useState("123");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(null)


  console.log('Error', error)
  function submitUser(e) {
    e.preventDefault();
    setError(false)
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    const options = {
      method: "POST",
      body: { ...user },
    };
    console.log("Submit User", user);
    return apiFetch(`signup`, options)
      .catch((error) => {
        setError(error)
        console.log("Client ERROR!!!", error)})
      .then((json) => {
        if (json && json.error) setError(json.error)
        localStorage.token = json.token
        console.log("Sign Up", json)})
      .then(() => setRedirect(true));
  }

  return (
    <Layout title="Sign Up">
      <h3>Sign Up</h3>
      <SignInForm onSubmit={submitUser}>
        <label htmlFor="firstName">First Name:</label>
        <br />
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => updateFirstName(e.target.value)}
          placeholder="Jane..."
        />
        <br />

        <label htmlFor="lastName">Last Name:</label>
        <br />
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => updateLastName(e.target.value)}
          placeholder="Doe..."
        />
        <br />

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

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <br />
        <input
          type="password"
          required
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => updateConfirmPassword(e.target.value)}
        />
        <br />

      {error && <ErrorMessage>Error - {error}</ErrorMessage>}
        <button type="submit">Sign Up</button>
      {!error && redirect && <Redirect to="/todos" />}
        <br />
        <Link to="/signin">Already a member? Sign in instead.</Link>
      </SignInForm>
    </Layout>
  );
};

export default SignUp;
