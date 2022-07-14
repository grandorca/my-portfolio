import { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./HeaderNavbar";
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
      pathname === "/my-portfolio/"
        ? "Home"
        : pathname === "/my-portfolio/about"
        ? "About"
        : "Contact";
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
        "#f6f6f6"
      );
      document.documentElement.style.setProperty("--theme-color", "#f6f6f6");
      document.documentElement.style.setProperty("--theme-back-div", "#f6f6f6");
      document.documentElement.style.setProperty(
        "--theme-front-div",
        "#f6f6f6"
      );
      document.documentElement.style.setProperty("--theme-font", "#000000");
      document.documentElement.style.setProperty("--theme-font-sub", "#5C5C5C");
      document.documentElement.style.setProperty(
        "--theme-border",
        "1px solid #212121"
      );
      document.documentElement.style.setProperty(
        "--theme-border-dim",
        "1px solid #bbb"
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
      document.documentElement.style.setProperty("--contact-divider", "block");
      document.documentElement.style.setProperty(
        "--theme-scrollbar",
        "#0f0f0f"
      );
      favicon.href = "./favicon-white.png";
    } else {
      //dark-theme
      document.documentElement.style.setProperty(
        "--theme-background",
        "#1c1c1c"
      );
      document.documentElement.style.setProperty("--theme-back-div", "#232323");
      document.documentElement.style.setProperty(
        "--theme-front-div",
        "#1a1a1a"
      );
      document.documentElement.style.setProperty("--theme-color", "#181818");
      document.documentElement.style.setProperty("--theme-font", "#ffffff");
      document.documentElement.style.setProperty("--theme-font-sub", "#c8c8c8");
      document.documentElement.style.setProperty("--theme-border", "none");
      document.documentElement.style.setProperty("--theme-border-dim", "none");
      document.documentElement.style.setProperty(
        "--theme-border-radius",
        "10px"
      );
      document.documentElement.style.setProperty(
        "--theme-font-family",
        "arial"
      );
      document.documentElement.style.setProperty("--theme-switch", "right");
      document.documentElement.style.setProperty("--contact-divider", "none");
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
          <Route
            path="/my-portfolio"
            element={<Home theme={theme} loading={loading} />}
          />
          <Route path="/my-portfolio/about" element={<About theme={theme} />} />
          <Route path="/my-portfolio/contact" element={<Contact />} />
          <Route path={["/*", "/my-portfolio/*"]} element={<NotFound />} />
        </Routes>
      </div>

      <Footer theme={theme}></Footer>
    </>
  );
};

export default App;
