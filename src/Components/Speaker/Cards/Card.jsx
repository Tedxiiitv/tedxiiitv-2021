import React from "react";
import "./Card.scss";
import dummyImg from "../../../Assests/images/dummyImg.png";

function Card({ name, desc }) {
  return (
    <div className="card">
      <img src={dummyImg} alt="dp" />
      <p>{name}</p>
      <div></div>
      <span>{desc}</span>
    </div>
  );
}

export default Card;
