import React from "react";
// import PropTypes from 'prop-types'
import {
  TodoContainer,
  TodoCard,
  TodoTitleContainer,
  TodoTitle,
  Check,
  DeleteContainer,
  DeleteIcon,
  TextIcon,
  StyledLink,
} from "../styles";

const TodosItem = ({
  _id,
  title,
  completed,
  description,
  deleteTodo,
  completeTodo,
  isEditing,
}) => {
  return (
    <>
      <DeleteContainer
        display={isEditing ? "true" : null}
        onClick={() => deleteTodo(_id)}
      >
        <DeleteIcon />
      </DeleteContainer>

      <TodoContainer>
        <TodoCard>
          <TodoTitleContainer>
            <StyledLink to={`/todo/${_id}`}>
              <TodoTitle>{title}</TodoTitle>{" "}
            </StyledLink>
            {description && <TextIcon />}
          </TodoTitleContainer>
          <span onClick={() => completeTodo(_id, !completed)}>
            <Check completed={completed ? "true" : null} />
          </span>
        </TodoCard>
      </TodoContainer>
    </>
  );
};

export default TodosItem;
