import "./App.css";
import ComingSoon from "./Components/ComingSoon/ComingSoon";
import Timer from "./Components/Timer/Timer";

function App() {
  return (
    <>
      <div
        className="App"
        style={{
          width: "100wh",
          height: "100vh",
          backgroundImage: `url("images/tedxbackground.png")`,
        }}
      >
        <ComingSoon />
      </div>
      <Timer />
    </>
  );
}

export default App;
