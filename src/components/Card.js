import React from "react";
import "./Card.css";

const Card = ({ style, text }) => {
  return (
    <div className="rectangle" style={style}>
      {text}
    </div>
  );
};

export default Card;
