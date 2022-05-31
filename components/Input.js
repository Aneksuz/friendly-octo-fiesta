import React from "react";

const Input = ({ title, placeholder }) => {
  return (
    <div>
      <h2>{title}</h2>
      <input
        className="bg-prim shadow-inner w-auto pr-2 font-rubik text-base "
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default Input;
