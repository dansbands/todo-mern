import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../components/Layout";

// import PropTypes from 'prop-types'

const SignIn = (props) => {
  const [firstName, updateFirstName] = useState("");
  const [lastName, updateLastName] = useState("");
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const [confirmPassword, updateConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  function submitUser(e) {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      password,
    };
    console.log("Submit User", data);
    setRedirect(true)
  }

  return (
    <Layout title="Sign In">
      <h3>Sign In</h3>
      <form onSubmit={submitUser}>
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

        <button type="submit">Sign In</button>
        {redirect && <Redirect to="/todos" />}
      </form>
      <Link to="/signup">Not a member? Sign up instead.</Link>
    </Layout>
  );
};

export default SignIn;
