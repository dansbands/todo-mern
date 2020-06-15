import React, { useState, useEffect } from "react";
import apiFetch from "../utils/apiFetch";
// import PropTypes from "prop-types";

const TodoView = (props) => {
  const [todo, setTodo]= useState('');
  const [title, updateTitle] = useState("");
  const [description, updateDescription] = useState("");

  const getTodo = () => {
    return apiFetch(`todo/${props.id}`).then((json) => {
      setTodo(json)
      if (json.title) updateTitle(json.title)
      if (json.description) updateDescription(json.description)
    });
  };

  useEffect(() => {
    getTodo(props._id);
  }, []);

  const editTodo = (e) => {
    e.preventDefault()
    const { _id } = todo;
    const options = {
      method: "PUT",
      body: { ...todo, title, description },
    };
    return apiFetch(`todo/${_id}/edit`, options)
      .catch((error) => console.log("ERROR!!!", error))
      .then((json) => console.log("update", json))
  };

  return (
    <form onSubmit={editTodo}>
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
    </form>
  );
};

export default TodoView;
