import "./App.css";
import ComingSoon from "./Components/ComingSoon/ComingSoon"

function App() {
  return (
    <div
      className="App"
      style={{ width: "100vw", height: "100vh", backgroundImage: `url("images/tedxbackground.png")`}}
    >
      <ComingSoon />
    </div>
  );
}

export default App;
