import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Background from "./Components/Background/Background";
import React from "react";
import Team from "./Components/Team/Team";

function App() {
  return (
    <React.Fragment>
      <Background />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/team" component={Team} />
      </Router>
    </React.Fragment>
  );
}

export default App;

// hey develop
