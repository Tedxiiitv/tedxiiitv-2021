import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="*">
          <Redirect />
        </Route>
      </Router>
    </React.Fragment>
  );
}

export default App;
