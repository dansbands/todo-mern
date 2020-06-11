import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Content from "./Content";
import { withRouter } from 'react-router-dom'

const Layout = ({ children, title }) => {
  console.log("children", children);
  return (
    <>
      <Helmet>
        <title>{title} | MERN Todo App</title>
      </Helmet>
      <Header />
      <Content>{children}</Content>
    </>
  );
};

export default withRouter(Layout);
