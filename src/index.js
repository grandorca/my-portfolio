import React,{ StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Buttons from "./components/buttons";
import NavBar from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.css';

const root = createRoot(document.querySelector("#root"));
root.render(
  <StrictMode>
    <Buttons />
    <React.Fragment>
      <NavBar />
      <NavBar />
    </React.Fragment>
  </StrictMode>
);
