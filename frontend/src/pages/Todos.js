import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import Layout from "../components/Layout";
import { withRouter } from "react-router-dom";
import { TodoList, TodoCard } from "../styles";
import styled from 'styled-components'
import CheckboxMarkedCircleOutlineIcon from "mdi-react/CheckboxMarkedCircleOutlineIcon";

const TodoTitle = styled.p`
  display: inline;
  width: 50%;
  box-sizing: border-box;
  margin: 10px
  overflow: hidden;
  text-overflow: ellipsis;

`

const Check = styled(CheckboxMarkedCircleOutlineIcon)`
  float: right;
  color: green;
`

const Todos = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  };

  const deleteTodo = id => {
    console.log('delete todo', id);
  }

  const completeTodo = id => {
    console.log('complete todo', id);
  }

  const renderTodos = () => {
    return todos
      .filter((todo) => todo.userId === 1)
      .map(({id, title}) => (
        <TodoCard key={id}>
          <TodoTitle>{title}</TodoTitle>{" "}
          <span onClick={() => completeTodo(id)}>
            <Check />
          </span>
        </TodoCard>
      ));
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
