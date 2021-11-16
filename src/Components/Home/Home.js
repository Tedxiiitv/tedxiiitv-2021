import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import MobileBackground from "../Background/MobileBackground";
import Social from "../Social/Social";
import Invite from "../Invite/Invite";
import Footer from "../Footer/Footer";
import MobileFooter from "../Footer/MobileFooter/MobileFooter";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MobileBackground />
      <Social />
      <Invite />
      <Footer />
      <MobileFooter />
    </div>
  );
}

export default Home;
