import React from "react";
import "./Hero.css";
import Rectangle from "../../Assests/images/Rectangle.png";

function Hero() {
  return (
    <div className="hero-page">
      <h2 className="theme">Theme :</h2>
      <h2 className="next-wave">THE NEXT WAVE</h2>
      <div className="rectangle">
        <img src={Rectangle} alt="Rectangle" />
      </div>
    </div>
  );
}

export default Hero;
