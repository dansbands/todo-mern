import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom'
import { SignInForm } from "../styles";
import apiFetch from "../utils/apiFetch";

// import PropTypes from "prop-types";

const TodoView = (props) => {
  const [todo, setTodo]= useState('');
  const [title, updateTitle] = useState("");
  const [description, updateDescription] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const getTodo = async () => {
      const result = await apiFetch(`todo/${props.id}`)
      setTodo(result)
      if (result.title) updateTitle(result.title)
      if (result.description) updateDescription(result.description)
    };
    getTodo();
  }, [props.id]);

  const editTodo = (e) => {
    e.preventDefault()
    const { _id } = todo;
    const options = {
      method: "PUT",
      body: { ...todo, title, description },
    };
    return apiFetch(`todo/${_id}/edit`, options)
      .catch((error) => console.log("ERROR!!!", error))
      // .then((json) => console.log("update", json))
      .then(() => setRedirect(true))
  };

  return (
    <SignInForm onSubmit={editTodo}>
      <label htmlFor="title">Title:</label><br/>
      <input
        type="text"
        value={title}
        onChange={e => updateTitle(e.target.value)}
        placeholder="Title..."
      /><br/>

      <label htmlFor="title">Description:</label><br/>
      <input
        type="text"
        value={description}
        onChange={e => updateDescription(e.target.value)}
        placeholder="Description..."
      /><br/>
      <button type="submit">Submit</button>
      {redirect && <Redirect to="/todos" />}
    </SignInForm>
  );
};

export default TodoView;
