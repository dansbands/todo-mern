import React from 'react'
// import PropTypes from 'prop-types'
import {
  TodoContainer,
  TodoCard,
  TodoTitle,
  Check,
  DeleteContainer,
  Delete,
} from "../styles";

const TodoItem = ({ _id, title, completed, deleteTodo, completeTodo, isEditing }) => {
  return (
    <TodoContainer>
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
  )
}

export default TodoItem
