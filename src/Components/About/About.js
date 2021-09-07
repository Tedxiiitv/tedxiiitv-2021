import React from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar";
import "../Navbar/Navbar.css";

function About() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url("images/tedxbackground.png")`,
      }}
    >
      <Navbar name="Back" link="/"/>

      <div className="about">

        <div id="parent-logo">
          <div id="child-flex">
            <div className="ted red">TED</div>
            <div className="ted-x red">X</div>
            <div className="iiitv white">IIITVadodara</div>
          </div>
          <div className="subtitle white">
          <span className="red">x</span> = independently organized TED event</div>
        </div>

        <hr className="line" />
        <div className="about-text white">
        Indian Institute of Information Technology Vadodara is 
        one of the most rapidly growing institutes of India 
        imparting technical knowledge. In order to break the 
        restraints on knowledge, IIITV brings to you TEDxIIITV,
        a learning experience like never before. Organized by 
        the curious minds of IIITV, TEDxIIITV features live 
        speakers sharing their thoughts on life and sparking 
        a new flame of enthusiasm among the youth.
        <br></br>
        A TEDx is a worldwide network that organizes TED-style 
        events, by bringing local ideas to a worldwide level. 
        It aims to spread transformative ideas and innovative 
        solutions that transcend limits, classifications, and 
        borders to build the sort of society we all want to 
        live in. TEDx events are produced independently from 
        TED conferences; yet within the framework of TED's 
        structure and regulations. 

        </div>
        {/* <button className="about-button">
          <span className="about-button-text white">Read More</span>
        </button> */}
      </div>
    </div>
  );
}

export default About;
