import React from "react";
import { useTheme } from "../App";
import "./ThemeToggle.css";

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
    return (
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          background: isDarkMode ? "white" : "black",
          color: isDarkMode ? "black" : "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    );
  };

  export default ThemeToggle;