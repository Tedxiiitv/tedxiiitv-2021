import React from "react";
import "./Hero.css";
// import Wave from "../../Assests/Images/Wave.png";
import Rectangle from "../../Assests/Images/Rectangle.png";

function Hero() {
  return (
    <div className="hero-page">
      <div className="Wave">
        {/* <img src={Wave} alt='wave' className='wave' /> */}
      </div>

      <h2 className="theme">Theme</h2>

      <h2 className="next-wave">THE NEXT WAVE</h2>

      <img src={Rectangle} alt="Rectangle" className="rectangle" />
    </div>
  );
}

export default Hero;
