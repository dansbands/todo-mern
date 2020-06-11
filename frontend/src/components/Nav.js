import React from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { StyledLink } from "../styles";

const Nav = (props) => {
  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/todos">Todos</StyledLink>
      <StyledLink to="/todo/1">Todo</StyledLink>
    </nav>
  );
};

export default Nav;
