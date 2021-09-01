import React from "react";
import "./ComingSoon.css";

function ComingSoon() {
  return (
    <div>
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
      <div className="coming-soon white">Coming Soon....</div>
    </div>
  );
}

export default ComingSoon;
