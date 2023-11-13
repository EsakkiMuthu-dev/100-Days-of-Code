import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#00ff00"); // Default color: green

  // Function to handle changes in the color picker
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="some" style={{ backgroundColor: color }}>
      <h1 className="text-center bg-origin-padding">
        Background Colour Changer
      </h1>

      <div className="flex">
      <button style={{ backgroundColor: "#ff0000" }} onClick={() => setColor("#ff0000")}>
  Red
</button>
<button style={{ backgroundColor: "#00ff00" }} onClick={() => setColor("#00ff00")}>
  Green
</button>
<button style={{ backgroundColor: "#ffff00" }} onClick={() => setColor("#ffff00")}>
  Yellow
</button>

        {/* Color picker input */}
        <label htmlFor="colorPicker">Custom Color:</label>
        <input
          type="color"
          id="colorPicker"
          name="colorPicker"
          value={color}
          onChange={handleColorChange}
        />
      </div>
    </div>
  );
}

export default App;
