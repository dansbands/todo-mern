import React from "react";
// import PropTypes from 'prop-types'
// import styled, { ThemeProvider } from "styled-components";
import PencilIcon from "mdi-react/PencilIcon";
import PlusCircleOutlineIcon from "mdi-react/PlusCircleOutlineIcon";
import { StyledHeader } from "../styles";

const TodosHeader = ({ isAdding, isEditing, setEditing, setAdding }) => {
  const PencilButton = (isEditing, setEditing) => {
    let pencilClass = isEditing ? "editing" : "not-editing";
    return (
      <button
        type="button"
        className="clear-btn"
        onClick={() => setEditing(!isEditing)}
      >
        <PencilIcon className={pencilClass} />
      </button>
    );
  };

  const PlusCircleButton = (isAdding, setAdding) => {
    let circleClass = isAdding ? "editing" : "not-editing";
    return (
      <button
        type="button"
        className="clear-btn"
        onClick={() => setAdding(!isAdding)}
      >
        <PlusCircleOutlineIcon className={circleClass} />
      </button>
    );
  };

  return (
    <StyledHeader>
      {PencilButton(isEditing, setEditing)}
      <h3>Todos</h3>
      {PlusCircleButton(isAdding, setAdding)}
    </StyledHeader>
  );
};

export default TodosHeader;
