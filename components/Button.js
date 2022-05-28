import React from "react";

const Button = ({ styling, OnClick, value }) => {
  return (
    <button className={"btn ${styling}"} onClick={onClick()}>
      {value}
    </button>
  );
};

export default Button;
