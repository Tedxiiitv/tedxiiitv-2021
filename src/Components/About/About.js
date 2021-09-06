import React from "react";
import "./About.css";

function About() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url("images/tedxbackground.png")`,
      }}
    >
      <div className="about">
        <div className="flex-container">
          <div className="flex-child ted red">
            <p>TED</p>
          </div>
          <div className="flex-child ted-x red">
            <sup>x</sup>
          </div>
          <div className="flex-child iiitv white">IIITV</div>
        </div>
        <div className="subtitle white">
          <span className="red">x</span> = independently organized TED event
        </div>
        <hr className="line" />
        <div className="about-text white">
          Congue nisi vitae suscipit tellus. Dui id ornare arcu odio ut. Ut
          tellus elementum sagittis vitae et leo. Porttitor rhoncus dolor purus
          non enim praesent elementum facilisis. Consectetur adipiscing elit ut
          aliquam purus. Nulla porttitor massa id neque. Viverra tellus in hac
          habitasse platea dictumst vestibulum rhoncus. Eget mauris pharetra et
          ultrices neque ornare aenean euismod. Elementum eu facilisis sed odio.
          Rutrum tellus pellentesque eu tincidunt. Lacus sed viverra tellus in
          hac habitasse platea. At tempor commodo ullamcorper a lacus vestibulum
          sed. Euismod elementum nisi quis eleifend quam adipiscing. Rutrum
          tellus pellentesque eu tincidunt tortor. Nibh sed pulvinar proin
          gravida hendrerit lectus.
        </div>
        {/* <button className="about-button">
          <span className="about-button-text white">Read More</span>
        </button> */}
      </div>
    </div>
  );
}

export default About;
