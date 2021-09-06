import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <nav id="navbar">
      <span>
        <a href={props.link} className="navbar__link">
          {props.name}
        </a>
      </span>
    </nav>
  );
}
export default Navbar;
