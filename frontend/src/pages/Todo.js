import React from "react";
import { useParams } from "react-router-dom";
// import PropTypes from "prop-types";
import Layout from "../components/Layout";
import TodoView from "../components/TodoView";
import { withRouter } from "react-router-dom";

const Todo = (props) => {
  // console.log("todo", props);

  let { id } = useParams();
  const todo = `Todo #${id}`;
  return (
    <>
      <Layout title={todo}>
        <h3>{todo}</h3>
      <TodoView id={id} />
      </Layout>
    </>
  );
};

export default withRouter(Todo);
