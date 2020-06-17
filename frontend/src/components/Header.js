import React from "react";
// import PropTypes from "prop-types";
import Nav from "./Nav";

const Header = ({user}) => {
  console.log({user});
  // const { firstName, lastName } = user;
  return (
    <>
      <h1>MERN Todo App</h1>
    {user && <h3>Signed in as {user.firstName} {user.lastName}</h3>}
      <Nav />
    </>
  );
};

export default Header;
