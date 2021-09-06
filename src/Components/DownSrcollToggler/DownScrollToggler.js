import React from "react";
import "./DownScrollToggler.css";
function downFunction() {
  document.body.scrollDown = 0;
  document.documentElement.scrollDown = 0;
}
function DownScrollToggler() {
  return (
    <div className="scroll-parent">
      <button id="downscroll" onclick={downFunction()}><img src="downarrow.png" alt="down" /></button>
    </div>
  );
}
export default DownScrollToggler;