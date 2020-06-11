import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  margin-left: 10px;
  text-decoration: none;
`;

export const TodoList = styled.div`
  margin: 0 10%;
`;

export const TodoCard = styled.div`
  text-align: left;
  padding: 10px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin: 2px 0;
`;
