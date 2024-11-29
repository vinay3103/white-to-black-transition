import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ParallaxProvider } from "react-scroll-parallax"; // Import the provider
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
