import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div
      className="App"
      style={{ width: "100vw", height: "100vh", backgroundImage: `url("images/tedxbackground.png")` }}
    >
      <Navbar/>
    </div>
  );
}

export default App;