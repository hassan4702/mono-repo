import React from "react";
const Input = ({ type, className, placeholder }) => {
  return (
    <div>
      <input type={type} className={className} placeholder={placeholder} />
    </div>
  );
};

export default Input;
