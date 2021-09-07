import React from "react";
import Navbar from "../Navbar/Navbar";
import ComingSoon from "../ComingSoon/ComingSoon";
import Timer from "../Timer/Timer";

function Home() {
  return (
    <div className="App">
      <ComingSoon />
      <Navbar name="About Us" link="/about"/>
      <Timer />
    </div>
  );
}

export default Home;
