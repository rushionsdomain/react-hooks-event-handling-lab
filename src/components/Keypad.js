// src/components/Keypad.js
import React from "react";

function Keypad() {
  const handleChange = (event) => {
    console.log("Entering password...");
  };

  return <input type="password" onChange={handleChange} />;
}

export default Keypad;
