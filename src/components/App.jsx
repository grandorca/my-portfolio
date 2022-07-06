import { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import NotFound from "./NotFound";

const App = () => {
  //scorll-to-top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  //dynamic-title
  useEffect(() => {
    let location =
      pathname === "/" ? "Home" : pathname === "/about" ? "About" : "Contact";
    document.title = "Moohyun Kang | " + location;
  }, [pathname]);

  //theme-change
  const [theme, setTheme] = useState(currentTheme());
  function currentTheme() {
    const theme = sessionStorage.getItem("theme");
    if (!theme) {
      return "dark";
    }
    return theme;
  }
  useEffect(() => {
    sessionStorage.setItem("theme", theme);
    const favicon = document.querySelector("#favicon");

    if (theme === "light") {
      //light-theme
      document.documentElement.style.setProperty(
        "--theme-background",
        "#fcfcfc"
      );
      document.documentElement.style.setProperty("--theme-color", "#fcfcfc");
      document.documentElement.style.setProperty("--theme-back-div", "#fcfcfc");
      document.documentElement.style.setProperty(
        "--theme-front-div",
        "#fcfcfc"
      );
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

      document.documentElement.style.setProperty(
        "--theme-back-div-width",
        "80vw"
      );
      document.documentElement.style.setProperty(
        "--theme-back-div-max-width",
        "400px"
      );
      document.documentElement.style.setProperty(
        "--theme-scrollbar",
        "#0f0f0f"
      );
      favicon.href = "./favicon-white.png";
    } else {
      //dark-theme
      document.documentElement.style.setProperty(
        "--theme-background",
        "#1e1e1e"
      );
      document.documentElement.style.setProperty("--theme-back-div", "#232323");
      document.documentElement.style.setProperty(
        "--theme-front-div",
        "#1a1a1a"
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

      document.documentElement.style.setProperty(
        "--theme-back-div-width",
        "auto"
      );
      document.documentElement.style.setProperty(
        "--theme-back-div-max-width",
        "auto"
      );
      document.documentElement.style.setProperty(
        "--theme-scrollbar",
        "#3d3d3d"
      );
      favicon.href = "./favicon-black.png";
    }
  }, [theme]);
  //loading-animation
  const [loading, setLoading] = useState("true");
  const loadingRef = useRef();
  async function doLoading() {
    await new Promise((res) => setTimeout(res, 2000));
    setLoading("false");
  }
  useEffect(() => {
    doLoading();
  }, []);

  return (
    <>
      <div className="loading-page" id={loading} ref={loadingRef}>
        <p id="m">M</p>
        <p id="k">K</p>
      </div>

      <div className="not-footer">
        <Header theme={theme} changeTheme={setTheme}></Header>
        <Routes>
          <Route path="/" element={<Home theme={theme} loading={loading} />} />
          <Route path="/about" element={<About theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
