import styled from "styled-components";
import { Link } from "react-router-dom";
import CheckboxMarkedCircleOutlineIcon from "mdi-react/CheckboxMarkedCircleOutlineIcon";
import DeleteForeverOutlineIcon from "mdi-react/DeleteForeverOutlineIcon";
import TextBoxOutlineIcon from "mdi-react/TextBoxOutlineIcon";

import PencilIcon from "mdi-react/PencilIcon";
import PlusCircleOutlineIcon from "mdi-react/PlusCircleOutlineIcon";

export const StyledLink = styled(Link)`
  margin-left: 10px;
  text-decoration: none;
`;

export const TodoList = styled.div`
  ${"" /* border: 1px solid red; */}
  margin: 0 10vw;
`;

export const TodoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TodoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  padding: 10px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin: 2px 0;
  margin-left: ${(props) => (props.isEditing ? "60px" : 0)};
  transition: margin-left 1s;
  width: 100%;
  background: white;
`;

export const TodoTitle = styled.p`
  display: inline;
  width: 50%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const TodoTitleContainer = styled.div`
  min-width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Check = styled(CheckboxMarkedCircleOutlineIcon)`
  position: relative;
  right: 15px;
  color: ${(props) => (props.completed ? "green" : "lightgrey")};
  &:hover {
    cursor: pointer;
  }
`;

export const DeleteContainer = styled(DeleteForeverOutlineIcon)`
  margin-top: 15px;
  margin-left: -30px;
  ${"" /* margin-right: ${props => props.display ? '20px' : 0}; */}
  float: left;
  color: ${(props) => (props.display ? "red" : "white")};
  display: ${(props) => (props.display ? "block" : "none")};
  &:hover {
    cursor: pointer;
  }
`;

export const DeleteIcon = styled(DeleteForeverOutlineIcon)`
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
  active: "gray",
  inactive: "lightgray",
};

export const StyledPencil = styled(PencilIcon)`
  color: ${(props) => props.theme.active};
  &:hover {
    cursor: pointer;
  }
`;

export const StyledPlusCircle = styled(PlusCircleOutlineIcon)`
  color: ${(isAdding) => (isAdding ? "grey" : "lightgrey")};
  &:hover {
    cursor: pointer;
  }
`;

export const StyledForm = styled.form`
  label {
    text-align: left;
  }
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
    background: white;
  }
`;

export const SignInForm = styled.form`
  text-align: left;
  margin-left: 25%;
  width: 50%;
  margin-bottom: 200px;

  input {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid lightgrey;
    margin: 0;
    margin: 10px 0 20px;
    padding-left: 10px;
  }
  button {
    width: 30%;
    height: 35px;
    border-radius: 5px;
    border: 1px solid lightgrey;
    margin: 10px 0 40px;
    background: white;
    cursor: pointer;
  }
`;

export const TextIcon = styled(TextBoxOutlineIcon)`
  color: lightgrey;
`;

export const ErrorMessage = styled.p`
  color: red;
`;
