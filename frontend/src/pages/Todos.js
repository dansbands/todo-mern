import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
// import PropTypes from "prop-types";
import Layout from "../components/Layout";
import TodosForm from "../components/TodosForm";
import TodosHeader from "../components/TodosHeader";
import TodosItem from "../components/TodosItem";
import apiFetch from "../utils/apiFetch";
import { TodoList } from "../styles";
// import styled from "styled-components";

const Todos = (props) => {
  const [todos, setTodos] = useState([]);
  const [isEditing, setEditing] = useState(false);
  const [isAdding, setAdding] = useState(true);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    return apiFetch("todos").then((json) => setTodos(json));
  };

  const addTodo = (todo) => {
    const data = { userId: 1, title: todo, completed: false, description: '' };
    const options = {
      method: "POST",
      body: data,
    };
    return apiFetch("todos", options)
      .catch((error) => console.log("ERROR!!!", error))
      .then(() => getTodos());
  };

  const completeTodo = (id, completed) => {
    const options = {
      method: "PUT",
      body: { completed },
    };
    return apiFetch(`todo/${id}/complete`, options)
      .catch((error) => console.log("ERROR!!!", error))
      .then((json) => console.log("complete", json))
      .then(() => getTodos());
  };

  const deleteTodo = (id) => {
    const options = {
      method: "DELETE",
      body: { id },
    };
    return apiFetch(`todo/${id}`, options)
      .catch((error) => console.log("ERROR!!!", error))
      .then((json) => console.log("Deleted", json))
      .then(() => getTodos());
  };

  const renderTodos = () => {
    return todos
      .filter((todo) => todo.userId === 1)
      .map(({ _id, title, completed, description }) => (
        <TodosItem
          key={_id}
          _id={_id}
          title={title}
          completed={completed}
          description={description ? description : null}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          isEditing={isEditing}
        />
      ));
  };

  return (
    <>
      <Layout title="Todos">
        <TodoList>
          <TodosHeader
            isEditing={isEditing}
            isAdding={isAdding}
            setEditing={setEditing}
            setAdding={setAdding}
          />
          {isAdding && <TodosForm addTodo={addTodo} />}
          {todos && renderTodos()}
        </TodoList>
      </Layout>
    </>
  );
};

export default withRouter(Todos);
