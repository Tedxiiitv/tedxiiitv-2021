import React from "react";
import Navbar from "../Navbar/Navbar";
import ComingSoon from "../ComingSoon/ComingSoon";
import Timer from "../Timer/Timer";

function Home() {
  return (
    <div className="App">
      <Navbar name="About Us" link="/about" />
      <ComingSoon />
      <Timer />
    </div>
  );
}

export default Home;
