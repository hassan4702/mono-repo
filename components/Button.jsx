import React from "react";
const Button = ({ className, text, type }) => {
  return (
    <div>
      <button type={type} className={className}>
        {text}
      </button>
    </div>
  );
};

export default Button;
