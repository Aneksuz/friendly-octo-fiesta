import React from "react";

const Input = ({ title, placeholder }) => {
  return (
    <div>
      <h2>{title}</h2>
      <input className="bg-prim shadow-inner shadow-sm w-auto pr-2">
        {placeholder}
      </input>
    </div>
  );
};

export default Input;
