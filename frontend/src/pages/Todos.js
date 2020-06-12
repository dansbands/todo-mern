import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import Layout from "../components/Layout";
import TodoHeader from "../components/TodoHeader";
import TodoForm from "../components/TodoForm";
import { withRouter } from "react-router-dom";
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

const BASE_URL = "http://localhost:3001"

const Todos = (props) => {
  const [todos, setTodos] = useState([]);
  const [isEditing, setEditing] = useState(true);
  const [isAdding, setAdding] = useState(true);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    console.log('getTodos');
    return fetch("http://localhost:3001/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  };

  const addTodo = (todo) => {
    const data = { userId: 1, title: todo, completed: false }
    console.log("add todo", data);
    return (
      fetch("http://localhost:3001/todos", {
        method: "POST",
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => (response.json()))
        .catch(error => console.log('ERROR!!!', error))
        .then(() => getTodos())
    )
  };

  const completeTodo = (id) => {
    console.log("complete todo", id);
    return fetch(`${BASE_URL}/todo/${id}`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ completed: true })
    })
    .then(res => {
      if (res.ok) return res.json()
    })
    .catch(error => console.log('ERROR!!!', error))
    .then(json => {
      console.log(json);
    })
    .then(() => getTodos());
  };

  const deleteTodo = (id) => {
    console.log("delete todo", id);
    return fetch(`${BASE_URL}/todo/${id}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({id})
    })
    .then(res => {
      if (res.ok) return res.json()
    })
    .catch(error => console.log('ERROR!!!', error))
    .then(json => {
      console.log(json);
    })
    .then(() => getTodos());
  };

  const renderTodos = () => {
    return todos
      .filter((todo) => todo.userId === 1)
      .map(({ _id, title }) => (
        <TodoContainer key={_id}>
          <DeleteContainer
            display={isEditing ? "true" : null}
            onClick={() => deleteTodo(_id)}
          >
            <Delete />
          </DeleteContainer>
          <TodoCard>
            <TodoTitle>{title}</TodoTitle>{" "}
            <span onClick={() => completeTodo(_id)}>
              <Check />
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
