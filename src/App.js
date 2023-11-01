import React, { useState, useEffect } from "react";
import "./styles.css";

function Random() {
  const [randomEntry, setRandomEntry] = useState(null);
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleButtonClick = () => {
    setIsHighlighted(!isHighlighted);
  };

  useEffect(() => {
    fetch("https://api.publicapis.org/random")
      .then((response) => response.json())
      .then((data) => {
        setRandomEntry(data);
      });
  }, []);

  return (
    <div>
      <h2>Random API Entry</h2>
      <p>
        Name:{" "}
        <span className={isHighlighted ? "button-highlighted" : ""}>
          {randomEntry && randomEntry.title}
        </span>
      </p>

      <button onClick={handleButtonClick}>Toggle Highlight</button>
    </div>
  );
}

export default Random;
