import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const root = createRoot(document.querySelector("#root"));
root.render(
  <StrictMode>
    <Header></Header>

    <BrowserRouter basename="/moohka">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>

    <Footer></Footer>
  </StrictMode>
);
