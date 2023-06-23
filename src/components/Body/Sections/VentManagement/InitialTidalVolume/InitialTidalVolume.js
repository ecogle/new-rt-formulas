import React from "react";
import { useState } from "react";

export default function InitialTidalVol() {
  const [height, setHeight] = useState("");
  const handleClick = () => {
    alert(height);
  };
  return (
    <div>
      <input
        type="text"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <button onClick={handleClick}>Test</button>
    </div>
  );
}
