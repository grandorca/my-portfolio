import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  //browser-title-change
  const [title, setTitle] = useState("My Portfolio");
  useEffect(() => {
    document.title = title;
  }, [title]);
  const changeTitle = (event) => {
    setTitle("My Portfolio | " + event.target.innerHTML);
  };

  //theme-dropdown
  function themeDown() {
    let currentValue = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--display-dropdown");
    currentValue = currentValue === " none" ? "block" : " none";
    document.documentElement.style.setProperty(
      "--display-dropdown",
      currentValue
    );
  }

  //dropdown-position
  const switchRef = useRef();
  const dropdownRef = useRef();
  useEffect(() => {
    function handleResize() {
      let rect = switchRef.current.getBoundingClientRect();
      dropdownRef.current.style.setProperty("left", rect.left - 26 + "px");
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  //theme-change & browser favicon
  const favicon = document.querySelector("#favicon");
  function lightTheme() {
    document.documentElement.style.setProperty("--theme-background", "#ffffff");
    document.documentElement.style.setProperty("--theme-color", "#ffffff");
    document.documentElement.style.setProperty("--theme-font", "#000000");
    document.documentElement.style.setProperty("--theme-font-sub", "#5C5C5C");
    document.documentElement.style.setProperty("--theme-border-color", "#000000");
    document.documentElement.style.setProperty("--theme-border-radius", "0px");
    document.documentElement.style.setProperty(
      "--theme-font-family",
      "georgia"
    );
    document.documentElement.style.setProperty("--theme-switch", "left");

    favicon.href = "./favicon_white.png";
  }
  function darkTheme() {
    document.documentElement.style.setProperty("--theme-background", "#212121");
    document.documentElement.style.setProperty("--theme-color", "#181818");
    document.documentElement.style.setProperty("--theme-font", "#ffffff");
    document.documentElement.style.setProperty("--theme-font-sub", "#c8c8c8");
    document.documentElement.style.setProperty("--theme-border-color", "#181818");
    document.documentElement.style.setProperty("--theme-border-radius", "10px");
    document.documentElement.style.setProperty("--theme-font-family", "arial");
    document.documentElement.style.setProperty("--theme-switch", "right");

    favicon.href = "./favicon_black.png";
  }

  return (
    <>
      <header>
        <h1 id="title">Moohyun Kang</h1>
      </header>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="./" onClick={changeTitle}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="./about" onClick={changeTitle}>
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="./contact" onClick={changeTitle}>
              Contact
            </Link>
          </li>
          <div
            className="navbar-item"
            id="theme-switch"
            onClick={themeDown}
            ref={switchRef}
          ></div>
        </ul>
        <ul className="dropdown" ref={dropdownRef}>
          <li className="dropdown-item" id="theme-light" onClick={lightTheme}>
            light
          </li>
          <li className="dropdown-item" id="theme-dark" onClick={darkTheme}>
            dark
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
