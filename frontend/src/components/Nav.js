import React from "react";
// import PropTypes from "prop-types";
import { StyledLink } from "../styles";

const Nav = (props) => {
  const handleClick = () => {
    console.log("Click!");
    localStorage.removeItem('token')
    console.log(localStorage);
  };

  return (
    <nav>
      {localStorage.token ? (
        <>
          <StyledLink onClick={handleClick} to="/">
            Sign Out
          </StyledLink>
          <StyledLink to="/todos">Todos</StyledLink>
        </>
      ) : (
        <StyledLink to="/">Sign In</StyledLink>
      )}
    </nav>
  );
};

export default Nav;
