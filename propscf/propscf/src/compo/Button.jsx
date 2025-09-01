import React from "react";
import './Button.css';  // Import CSS file

const Button = (props) => {
  return (
    <div>
      {props.children}
      <button className="custom-btn" onClick={props.handClick}>
        {props.text}
      </button>
    </div>
  );
}

export default Button;
