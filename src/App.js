import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Team from "./Components/Team/Team";
import Background from "./Components/Background/Background";

function App() {
  return (
    <React.Fragment>
      <Background />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/team" component={Team} />
      </Router>
    </React.Fragment>
  );
}

export default App;
