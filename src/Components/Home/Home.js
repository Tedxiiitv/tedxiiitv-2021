import React from "react";
import Navbar from "../Navbar/Navbar";
import ComingSoon from "../ComingSoon/ComingSoon";
import Timer from "../Timer/Timer";
import DownScrollToggler from "../DownSrcollToggler/DownScrollToggler";

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
      <ComingSoon />
      <DownScrollToggler />
      <Navbar name="About Us" link="/about"/>
      <Timer />
    </div>
  );
}

export default Home;
