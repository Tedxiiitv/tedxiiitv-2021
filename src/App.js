import "./App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: `url("images/tedxbackground.png")`,
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: -1,
        }}
      ></div>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Router>
    </React.Fragment>
  );
}

export default App;