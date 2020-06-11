import React from "react";
import { useParams } from "react-router-dom";
// import PropTypes from "prop-types";
import Layout from "../components/Layout";
import { withRouter } from 'react-router-dom'

const Todo = (props) => {
  console.log("todo 1");

  let { id } = useParams();
  const todo = `Todo #${id}`;
  return (
    <>
      <Layout title={todo}>
        <h3>{todo}</h3>
      </Layout>
    </>
  );
};

export default withRouter(Todo);
