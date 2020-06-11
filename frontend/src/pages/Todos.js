import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import { withRouter } from "react-router-dom";

const Todos = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  const renderTodos = () => {
    return todos
      .filter((todo) => todo.userId === 1)
      .map((todo) => <div>{todo.title}</div>);
  };

  return (
    <>
      <Layout title="Todos">
        <h3>Todos</h3>
        {renderTodos()}
      </Layout>
    </>
  );
};

export default withRouter(Todos);
