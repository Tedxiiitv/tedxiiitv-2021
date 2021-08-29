import "./App.css";
import LazyImage from "./Components/LazyImage/LazyImage";

function App() {
  return (
    <div
      className="App"
      style={{ width: "100vw", height: "100vh", background: "#000000" }}
    >
      <div style={{ height: "10%" }}></div>
      <div style={{ height: "80%" }}>
        <LazyImage src={`images/tedxbackground.png`} />
      </div>
      <div style={{ height: "10%" }}></div>
    </div>
  );
}

export default App;
