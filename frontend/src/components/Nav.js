import React from "react";
// import PropTypes from "prop-types";
import { StyledLink } from "../styles";

const Nav = (props) => {
  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/todos">Todos</StyledLink>
    </nav>
  );
};

export default Nav;
