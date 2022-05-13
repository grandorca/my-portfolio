import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import "./index.css";

const root = createRoot(document.querySelector("#root"));
root.render(
  <StrictMode>
    <div id="dark">
      <Router>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path=":wrongAddress" element={<NotFound />} />
        </Routes>

        <Footer></Footer>
      </Router>
    </div>
  </StrictMode>
);
