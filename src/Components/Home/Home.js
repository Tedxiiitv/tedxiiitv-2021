import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import MobileBackground from "../Background/MobileBackground";
import Social from "../Social/Social";
import VideoBox from "../VideoBox/VideoBox";
import Invite from "../Invite/Invite";
import Footer from "../Footer/Footer";
import MobileFooter from "../Footer/MobileFooter/MobileFooter";

function Home() {
  const tedxIIIVInfo =
    "Indian Institute of Information Technology Vadodara is one of India’s most rapidly growing institutes, imparting technical knowledge. To break the restraints on knowledge, IIITV brings to you TEDxIIITV, a learning experience like never before. Organized by the curious minds of IIITV, TEDxIIITV features live speakers sharing their thoughts on life and sparking a new flame of enthusiasm among the youth.";
  return (
    <div>
      <Navbar />
      <Hero />
      <MobileBackground />
      <Social />
      <VideoBox
        link="https://www.youtube.com/embed/0n4dKcCw64Y"
        title="What is TEDxIIITV?"
        text={tedxIIIVInfo}
      />
      <Invite />
      <Footer />
      <MobileFooter />
    </div>
  );
}

export default Home;
