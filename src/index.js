import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "./components/styles/index.css";

const root = createRoot(document.querySelector("#root"));
root.render(
  <StrictMode>
    <Router>
      <App></App>
    </Router>
  </StrictMode>
);