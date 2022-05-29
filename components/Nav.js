import React from "react";

const Nav = ({ icon, title, button }) => {
  return (
    <nav className="flex justify-between">
      <div>{button}</div>
      <div className="flex flex-row justify-center items-center">
        <div>{icon}</div>
        <h1>{title}</h1>
      </div>
      <div></div>
    </nav>
  );
};

export default Nav;
