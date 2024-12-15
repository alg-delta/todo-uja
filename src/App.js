import "./App.css";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [position, setPosition] = useState({ top: 100, left: 100 });
  const handleMouseenter = () => {
    const newTop = Math.random() * (window.innerHeight - 50);
    const newLeft = Math.random() * (window.innerWidth - 100);
    setPosition({ top: newTop, left: newLeft });
  };
  return (
    <div className="App">
      <Main />
      <button
        className="btn run"
        type="button"
        onMouseEnter={handleMouseenter}
        style={{
          position: "absolute",
          top: `${position.top}px`,
          left: `${position.left}px`,
          transition: " all 0,2s",
        }}
      >
        Піймай мене придурок!
      </button>
    </div>
  );
}

export default App;
