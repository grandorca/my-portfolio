import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import NotFound from "./NotFound";

const App = () => {
  //scroll-to-the-top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  //dynamic-title
  useEffect(() => {
    let location =
      pathname === "/" ? "Home" : pathname === "/about" ? "About" : "Contact";
    document.title = "My Portfolio | " + location;
  }, [pathname]);

  //theme-change(session storage)
  function currentTheme() {
    const theme = sessionStorage.getItem("theme");
    if (!theme) {
      return "dark";
    }
    return theme;
  }
  const [theme, setTheme] = useState(currentTheme());

  useEffect(() => {
    sessionStorage.setItem("theme", theme);
    const favicon = document.querySelector("#favicon");

    if (theme === "light") {
      document.documentElement.style.setProperty(
        "--theme-background",
        "#ffffff"
      );
      document.documentElement.style.setProperty("--theme-color", "#ffffff");
      document.documentElement.style.setProperty("--theme-font", "#000000");
      document.documentElement.style.setProperty("--theme-font-sub", "#5C5C5C");
      document.documentElement.style.setProperty(
        "--theme-border-color",
        "#000000"
      );
      document.documentElement.style.setProperty(
        "--theme-border-radius",
        "0px"
      );
      document.documentElement.style.setProperty(
        "--theme-font-family",
        "georgia"
      );
      document.documentElement.style.setProperty("--theme-switch", "left");
      document.documentElement.style.setProperty("--theme-back-div", "#ffffff");
      document.documentElement.style.setProperty(
        "--theme-front-div",
        "#ffffff"
      );
      document.documentElement.style.setProperty(
        "--theme-back-div-width",
        "400px"
      );
      favicon.href = "./favicon-white.png";
    } else {
      document.documentElement.style.setProperty(
        "--theme-background",
        "#212121"
      );
      document.documentElement.style.setProperty("--theme-color", "#181818");
      document.documentElement.style.setProperty("--theme-font", "#ffffff");
      document.documentElement.style.setProperty("--theme-font-sub", "#c8c8c8");
      document.documentElement.style.setProperty(
        "--theme-border-color",
        "#212121"
      );
      document.documentElement.style.setProperty(
        "--theme-border-radius",
        "10px"
      );
      document.documentElement.style.setProperty(
        "--theme-font-family",
        "arial"
      );
      document.documentElement.style.setProperty("--theme-switch", "right");
      document.documentElement.style.setProperty("--theme-back-div", "#262626");
      document.documentElement.style.setProperty(
        "--theme-front-div",
        "#1a1a1a"
      );
      document.documentElement.style.setProperty(
        "--theme-back-div-width",
        "auto"
      );
      favicon.href = "./favicon-black.png";
    }
  }, [theme]);

  //loading-animation
  const [loading, setLoading] = useState(true);
  async function doLoading() {
    await new Promise((res) => setTimeout(res, 2500));
    setLoading(false);
  }
  useEffect(() => {
    doLoading();
  }, []);

  return loading ? (
    <div className="loading-page">
      <p id="m">M</p>
      <p id="k">K</p>
    </div>
  ) : (
    <>
      <div className="not-footer">
        <Header changeTheme={setTheme}></Header>
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/about" element={<About theme={theme} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
