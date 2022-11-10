import React from "react";
import "./button.css";

const Button = ({ content, onButtonClick, type }) => {
  return (
    // {`button ${type || ""}`}
    <div className="button" onClick={onButtonClick(content)}>
      {content}
    </div>
  );
};

export default Button;
