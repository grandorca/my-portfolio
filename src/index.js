import React,{ StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Hello from "./components/hello";
import NavBar from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.css';

const root = createRoot(document.querySelector("#root"));
root.render(
  <StrictMode>
    <Hello />
    <React.Fragment>
      <NavBar />
      <NavBar />
    </React.Fragment>
  </StrictMode>
);
