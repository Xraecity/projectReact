//Name: Prince Obioha
// Date: 30th oct, 2023
// Description: react Assignment 5 get Random API
import React, { useState, useEffect } from "react";
import "../styles.css";

function Random() {
  const [apiEntry, setApiEntry] = useState(null);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [buttonColor, setButtonColor] = useState("black");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [searchButtonColor, setSearchButtonColor] = useState("black"); // Default color

  const clearData = () => {
    setApiEntry(null);
  };

  const fetchRandomData = () => {
    setIsHighlighted(false);
    setButtonColor("dodgerblue");

    fetch("https://api.publicapis.org/random")
      .then((response) => response.json())
      .then((data) => {
        setApiEntry(data.entries[0]);
      });
  };

  const fetchByCategory = (category) => {
    setIsHighlighted(false);
    setButtonColor("orange");

    fetch(`https://api.publicapis.org/random?category=${category}`)
      .then((response) => response.json())
      .then((data) => {
        setApiEntry(data.entries[0]);
      });
  };

  useEffect(() => {
    fetchRandomData();
  }, []);

  const apiCategories = [
    "Animals",
    "Anime",
    "Anti-Malware",
    "Art & Design",
    "Authentication & Authorization",
    "Blockchain",
    "Books",
    "Business",
    "Calendar",
    "Cloud Storage & File Sharing",
    "Continuous Integration",
    "Cryptocurrency",
    "Currency Exchange",
    "Data Validation",
    "Development",
    "Dictionaries",
    "Documents & Productivity",
    "Email",
    "Entertainment",
    "Environment",
    "Events",
    "Finance",
    "Food & Drink",
    "Games & Comics",
    "Geocoding",
    "Government",
    "Health",
    "Jobs",
    "Machine Learning",
    "Music",
    "News",
    "Open Data",
    "Open Source Projects",
    "Patent",
    "Personality",
    "Phone",
    "Photography",
    "Programming",
    "Science & Math",
    "Security",
    "Shopping",
    "Social",
    "Sports & Fitness",
    "Test Data",
    "Text Analysis",
    "Tracking",
    "Transportation",
    "URL Shorteners",
    "Vehicle",
    "Video",
    "Weather"
  ];

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filtered = apiCategories.filter((category) =>
      category.toLowerCase().includes(searchTerm)
    );
    setFilteredCategories(filtered);
    setSearchButtonColor("black"); // Set the search button color
  };

  const handleButtonClick = () => {
    setIsHighlighted(false);

    // Toggle button color between orange and dodgerblue when clicked
    setButtonColor((prevColor) =>
      prevColor === "orange" ? "dodgerblue" : "orange"
    );
  };

  const handleCategoryButtonClick = (category) => {
    setIsHighlighted(false);

    // Toggle button color between orange and dodgerblue when clicked
    setButtonColor((prevColor) =>
      prevColor === "orange" ? "dodgerblue" : "orange"
    );

    fetchByCategory(category);
  };

  return (
    <div className="card">
      <h1
        style={{
          textAlign: "center"
        }}
      >
        Assignment 5: React - Random API{" "}
      </h1>
      
      <span className="catgorie">
        <b>Category:</b>{" "}
          {apiEntry ? apiEntry.Category : "No category"}
        </span>
        
      <input
        type="text"
        placeholder="Search for API Categories here"
        className="search-input"
        onChange={handleSearch}
        value={searchTerm}
      />
        
      <p>
        <b>Content:</b> {apiEntry ? apiEntry.API : "Search or select from categories"}
      </p>
      <i>
        <p>
          <b>Description:</b>{" "}
          <span style={{ fontSize: "16px" }}>
            {apiEntry ? apiEntry.Description : "Search or select content to display discription"}
          </span>
        </p>
      </i>
      <br />
      <button className="clear-button" onClick={clearData}>
          Start over
        </button>
      
      <br />
      <br />
      <hr />
        <address>Categories:</address>
      <div className="button-container">
        {searchTerm
          ? filteredCategories.map((category, index) => (
              <button
                className="custom-button"
                key={index}
                onClick={() => handleCategoryButtonClick(category)}
                style={{
                  backgroundColor: buttonColor,
                  color: "white",
                  outline: "3px ridge white",
                  borderRadius: "20% 0% 20% 0%"
                }}
              >
                {category}
              </button>
            ))
          : apiCategories.map((category, index) => (
              <button
                className="custom-button"
                key={index}
                onClick={() => handleCategoryButtonClick(category)}
                style={{
                  backgroundColor: buttonColor,
                  color: "white",
                  outline: "3px ridge white",
                  borderRadius: "20% 0% 20% 0%"
                }}
              >
                {category}
              </button>
            ))}
      </div>
    </div>
  );
}

export default Random;
