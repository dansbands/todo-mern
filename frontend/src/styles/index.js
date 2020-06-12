import styled from "styled-components";
import { Link } from "react-router-dom";
import CheckboxMarkedCircleOutlineIcon from "mdi-react/CheckboxMarkedCircleOutlineIcon";
import DeleteForeverOutlineIcon from "mdi-react/DeleteForeverOutlineIcon";

import PencilIcon from "mdi-react/PencilIcon";
import PlusCircleOutlineIcon from "mdi-react/PlusCircleOutlineIcon";

export const StyledLink = styled(Link)`
  margin-left: 10px;
  text-decoration: none;
`;

export const TodoList = styled.div`
  margin: 0 10%;
`;

export const TodoContainer = styled.div`
  display: inline;
`;

export const TodoCard = styled.div`
  text-align: left;
  padding: 10px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin: 2px 0;
  /* margin-left: ${(props) => (props.editing ? "40px" : 0)}; */
  transition: margin-left .5s;
`;

export const TodoTitle = styled.p`
  display: inline;
  width: 50%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Check = styled(CheckboxMarkedCircleOutlineIcon)`
  float: right;
  color: ${(props) => (props.completed ? "green" : "grey")};
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const DeleteContainer = styled(DeleteForeverOutlineIcon)`
  margin-left: -30px;
  float: left;
  color: ${(props) => (props.display ? "red" : "white")};
  display: ${(props) => (props.display ? "block" : "none")};
`;

export const Delete = styled(DeleteForeverOutlineIcon)`
  float: left;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const theme = {
  active: "blue",
  inactive: "lightgrey",
};

export const StyledPencil = styled(PencilIcon)`
  color: ${(props) => props.theme.active};
  &:hover {
    cursor: pointer;
  }
`;

export const StyledPlusCircle = styled(PlusCircleOutlineIcon)`
  color: ${(isAdding) => (isAdding ? "blue" : "grey")};
  &:hover {
    cursor: pointer;
  }
`;

export const StyledForm = styled.form`
  input {
    width: 80%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid lightgrey;
    margin: 0;
  }
  button {
    width: 15%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid lightgrey;
    padding: 0;
    margin: 0;
    margin-left: 10px;
    margin-bottom: 10px;
  }
`;
