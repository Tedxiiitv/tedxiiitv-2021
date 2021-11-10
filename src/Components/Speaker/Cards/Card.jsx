import React from "react";
import "./Card.scss";

function Card({ name, subtitle, imgSrc, link }) {
  return (
    <div className="card">
      <img src={imgSrc} alt="dp" />
      <a href={link} style={{textDecoration:'none'}}><p>{name}</p></a>
      <div className="line"></div>
      <div>{subtitle}</div>
    </div>
  );
}

export default Card;
