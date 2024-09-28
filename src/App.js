import "./App.css";
import Lottie from "lottie-react";
import animationData from "./phone.json";
import animationData1 from "./Name.json";
import animationData2 from "./bg.json";

import ResponsiveAppBar from "./appBar";

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <div className="App">
        {/* Background Animation */}
        <Lottie
          animationData={animationData2}
          className="background-animation"
        />

        {/* Foreground Animations */}
        <Lottie
          animationData={animationData1}
          className="foreground-animation"
          resizeMode="center"
          style={{ width: 300, marginBottom: 0, paddingBottom: 0 }}
        />
        <Lottie
          animationData={animationData}
          className="foreground-animation"
          resizeMode="center"
          style={{ width: 300, marginTop: 0, paddingTop: 0 }}
        />
      </div>
    </div>
  );
}

export default App;
