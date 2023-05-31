import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import axios from "axios";
import debounce from "lodash.debounce";

export default function LandingPage() {
  const [searchText, setSearchText] = useState("");
  const [cityResults, setCityResults] = useState([]);

  const handleSearchChange = debounce((value) => {
    setSearchText(value);
    fetchCityResults(value);
  }, 300);

  const fetchCityResults = async (query) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&types=(cities)&key=YOUR_API_KEY`
      );
      setCityResults(response.data.predictions);
    } catch (error) {
      console.error("Error fetching city results:", error);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        maxWidth: "1440px",
        minHeight: "100vh",
        margin: "0 auto",
        overflowX: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "28px", marginBottom: "8px" }}>
          Zeit, Essen zu bestellen
        </h1>
        <h3 style={{ fontSize: "16px" }}>
          Jetzt ein diazo in Deiner Nähe finden
        </h3>
      </div>

      {/* Left Part */}
      <div
        className="leftPart"
        style={{
          position: "absolute",
          top: "60px",
          left: 0,
          width: "60%",
          height: "100%",
          backgroundColor: "#FFD600",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "60px", // Added padding-top to push contents down
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "80%",
            border: "1px solid #000",
            borderRadius: "20px",
            padding: "4px",
          }}
        >
          <IconButton
            color="primary"
            aria-label="menu"
            style={{ padding: "8px" }}
          >
            <LocationOnIcon /> {/* Render the menu icon */}
          </IconButton>
          <input
            type="text"
            placeholder="Search City"
            style={{
              width: "calc(100% - 88px)", // Adjusted width considering the menu icon
              height: "100%",
              padding: "8px",
              fontSize: "16px",
              border: "none",
              outline: "none",
            }}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button
            type="button"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              padding: "8px",
            }}
          >
            <SearchIcon style={{ color: "#000" }} />
          </button>
        </div>
        <ul>
        {cityResults.map((result) => (
          <li key={result.place_id}>{result.description}</li>
        ))}
      </ul>
      </div>

      {/* Right Part */}
      <div
        className="rightPart"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "40%",
          height: "100%",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src={process.env.PUBLIC_URL + "/assests/pizza.png"}
              alt="Pizza"
              style={{ width: "100%", height: "auto", border: "none" }}
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/assests/burger.png"}
              alt="Burger"
              style={{ width: "100%", height: "auto", border: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
