import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
// import PropTypes from "prop-types";
import Layout from "../components/Layout";
import TodoHeader from "../components/TodoHeader";
import TodoForm from "../components/TodoForm";
import apiFetch from "../utils/apiFetch";
import {
  TodoList,
  TodoContainer,
  TodoCard,
  TodoTitle,
  Check,
  DeleteContainer,
  Delete,
} from "../styles";
// import styled from "styled-components";

const Todos = (props) => {
  const [todos, setTodos] = useState([]);
  const [isEditing, setEditing] = useState(true);
  const [isAdding, setAdding] = useState(true);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    return apiFetch("todos").then((json) => setTodos(json));
  };

  const addTodo = (todo) => {
    const data = { userId: 1, title: todo, completed: false };
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
    return apiFetch(`todo/${id}`, options)
      .catch((error) => console.log("ERROR!!!", error))
      .then((json) => console.log("complete", json))
      .then(() => getTodos());
  };

  const deleteTodo = (id) => {
    console.log("delete todo", id);
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
      .map(({ _id, title, completed }) => (
        <TodoContainer key={_id}>
          <DeleteContainer
            display={isEditing ? "true" : null}
            onClick={() => deleteTodo(_id)}
          >
            <Delete />
          </DeleteContainer>
          <TodoCard>
            <TodoTitle>{title}</TodoTitle>{" "}
            <span onClick={() => completeTodo(_id, !completed)}>
              <Check completed={completed ? "true" : null} />
            </span>
          </TodoCard>
        </TodoContainer>
      ));
  };

  console.log({ todos });

  return (
    <>
      <Layout title="Todos">
        <TodoList>
          <TodoHeader
            isEditing={isEditing}
            isAdding={isAdding}
            setEditing={setEditing}
            setAdding={setAdding}
          />
          {isAdding && <TodoForm addTodo={addTodo} />}
          {todos && renderTodos()}
        </TodoList>
      </Layout>
    </>
  );
};

export default withRouter(Todos);
