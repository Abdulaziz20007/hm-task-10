import { useState } from "react";
import "./App.css";
import "./ColorPicker.css";

function App() {
  const [selectedColor, setSelectedColor] = useState("#000000");

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div className="app-container">
      <h1>Color Picker</h1>
      <div className="color-picker-container">
        <label htmlFor="colorPicker">Choose a color:</label>
        <input
          type="color"
          id="colorPicker"
          value={selectedColor}
          onChange={handleColorChange}
        />
      </div>
      <div className="color-value-container">
        <label htmlFor="colorValue">Selected color value:</label>
        <input type="text" id="colorValue" value={selectedColor} readOnly />
      </div>
      <div className="color-preview" style={{ backgroundColor: selectedColor }}>
        <p>Color Preview</p>
      </div>
    </div>
  );
}

export default App;
