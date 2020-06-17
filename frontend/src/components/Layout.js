import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Content from "./Content";
import { withRouter } from 'react-router-dom'
import apiFetch from '../utils/apiFetch'

const Layout = ({ children, title }) => {
  const [user, setUser] = useState(null)

  const getUser = () => {
    const user = apiFetch("user")
    return user;
  }

  useEffect(() => {
    if (localStorage.token) getUser().then(json => setUser(json))
  }, [])

  // console.log('user', user);

  return (
    <>
      <Helmet>
        <title>{title} | MERN Todo App</title>
      </Helmet>
      <Header user={user} />
      <Content>{children}</Content>
    </>
  );
};

export default withRouter(Layout);
