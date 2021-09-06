import React from "react";
import Navbar from "../Navbar/Navbar";
import ComingSoon from "../ComingSoon/ComingSoon";
import Timer from "../Timer/Timer";

function Home() {
  return (
    <div
      className="App"
      style={{
        width: "100wh",
        height: "100vh",
        backgroundImage: `url("images/tedxbackground.png")`,
      }}
    >
      <Navbar name="About Us" link="/about"/>
      <ComingSoon />
      <Timer />
    </div>
  );
}

export default Home;
