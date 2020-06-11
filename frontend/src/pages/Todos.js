import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import { withRouter } from "react-router-dom";
import { TodoList, TodoCard } from "../styles";

const Todos = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }

  const renderTodos = () => {
    return todos
      .filter((todo) => todo.userId === 1)
      .map((todo) => <TodoCard key={todo.id}>{todo.title}</TodoCard>);
  };

  return (
    <>
      <Layout title="Todos">
        <h3>Todos</h3>
        <TodoList>{renderTodos()}</TodoList>
      </Layout>
    </>
  );
};

export default withRouter(Todos);
