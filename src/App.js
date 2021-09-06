import "./App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Router>
  );
}

export default App;