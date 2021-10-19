import React from "react";
import "./Card.scss";

function Card({ name, subtitle, imgSrc }) {
  return (
    <div className="card">
      <img src={imgSrc} alt="dp" />
      <p>{name}</p>
      <div className="line"></div>
      <div>{subtitle}</div>
    </div>
  );
}

export default Card;
