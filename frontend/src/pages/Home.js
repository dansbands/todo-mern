import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import { withRouter } from 'react-router-dom'

const Home = (props) => {
  console.log("home");

  return (
    <>
      <Layout title="Home">
        <h3>Home</h3>
      </Layout>
    </>
  );
};

export default withRouter(Home);
