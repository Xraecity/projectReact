import React, { useState, useEffect } from "react";
import "../styles.css";
import "mvp.css";

function Random() {
  const [apiEntry, setApiEntry] = useState(null);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [buttonColor, setButtonColor] = useState("black"); //defualt colicr

  const handleButtonClick = () => {
    setIsHighlighted(false);

    // Toggle button color when clicked
    setButtonColor((prevColor) =>
      prevColor === "orange" ? "dodgerblue" : "orange"
    );

    // fetching the ApI given
    fetch("https://api.publicapis.org/random")
      .then((response) => response.json())
      .then((data) => {
        setApiEntry(data.entries[0]);
      });
  };

  // apply the api
  useEffect(() => {
    fetch("https://api.publicapis.org/random")
      .then((response) => response.json())
      .then((data) => {
        setApiEntry(data.entries[0]);
      });
  }, []);

  if (!apiEntry) {
    // Adding Preloading :)
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <h1>Assignment 5: Random API Entry</h1>
      <p>
        <b>Name: </b>
        <span className={isHighlighted ? "button-highlighted" : ""}>
          {apiEntry.API}
        </span>
      </p>
      <i>
        <p>
          <b>Description:</b> {apiEntry.Description}
        </p>
      </i>
      <br />
      <br />

      <center>
        <button
          // Style the btn
          style={{
            backgroundColor: buttonColor,
            color: "white",
            outline: "3px ridge white",
            borderRadius: "20% 0% 20% 0%"
          }}
          onClick={handleButtonClick}
        >
          Generate New API Name
        </button>
      </center>
    </div>
  );
}

export default Random;
