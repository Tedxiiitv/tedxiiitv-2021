import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Team from "./Components/Team/Team";
import About from "./Components/About/About";
import Speaker from "./Components//Speaker/Speaker";
import Talk from "./Components/Talk/Talk";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/speakers" component={Speaker} />
        <Route exact path="/talks" component={Talk} />
      </Router>
    </React.Fragment>
  );
}

export default App;
