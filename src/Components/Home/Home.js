import React from "react";
import Navbar from "../Navbar/Navbar";
// import Hero from "../Hero/Hero";
import Social from "../Social/Social";
import Invite from "../Invite/Invite";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <Social />
      <Invite />
      <Footer />
    </div>
  );
}

export default Home;
