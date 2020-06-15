import React, { useState } from "react";
// import styled from "styled-components";
import { StyledForm } from "../styles";

const TodosForm = ({addTodo}) => {
  const [formValue, setFormValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitting', formValue);
    addTodo(formValue)
    setFormValue('')
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input type="text" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Enter Todo..." />
      <button type="submit">Submit</button>
    </StyledForm>
  );
};

export default TodosForm;
