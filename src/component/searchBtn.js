import React, { useState, useEffect } from "react";
import Random from "./component/Random";
import SearchBar from "./searchBtn"; // Import the SearchBar component
import "./styles.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (searchTerm) => {
    // Fetch data based on the search criteria (searchTerm)
    fetch(`https://api.publicapis.org/entries?title=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.entries);
      });
  };

  return (
    <div>
      <h2>Random API Entry</h2>
      <SearchBar onSearch={handleSearch} />{" "}
      {/* Pass the onSearch function to SearchBar */}
      <Random searchResults={searchResults} />
    </div>
  );
}

export default App;
