import "./App.css";
import ComingSoon from "./Components/ComingSoon/ComingSoon";
import Timer from "./Components/Timer/Timer";

import Navbar from "./Components/Navbar/Navbar";


function App() {
  return (
      <div
        className="App"
        style={{
          width: "100wh",
          height: "100vh",
          backgroundImage: `url("images/tedxbackground.png")`,
        }}
      >
        <Navbar/>
        <ComingSoon />
        <Timer />
      </div>
  );
}

export default App;
