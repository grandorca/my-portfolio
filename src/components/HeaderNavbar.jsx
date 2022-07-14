import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  //dropdown-position
  const switchRef = useRef();
  const dropdownRef = useRef();
  useEffect(() => {
    function handleResize() {
      let rect = switchRef.current.getBoundingClientRect();
      if (window.innerWidth < 640) {
        document.documentElement.style.setProperty(
          "--display-dropdown",
          "none"
        );
      } else {
        dropdownRef.current.style.setProperty(
          "right",
          `calc(${rect.left}px / 58)`
        );
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  //dropdown-display & change-for-mobile
  function themeDown() {
    let currentValue = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--display-dropdown");

    if (window.innerWidth < 640) {
      if (props.theme === "dark") {
        props.changeTheme("light");
      } else {
        props.changeTheme("dark");
      }
    } else {
      currentValue = currentValue !== "block" ? "block" : "none";
      document.documentElement.style.setProperty(
        "--display-dropdown",
        currentValue
      );
    }
  }

  //theme-change-methods
  function lightTheme() {
    props.changeTheme("light");
  }
  function darkTheme() {
    props.changeTheme("dark");
  }

  return (
    <>
      <header className="page-header">
        <h1 id="title">Moohyun Kang</h1>
      </header>
      
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="./my-portfolio/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="./my-portfolio/about">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="./my-portfolio/contact">Contact</Link>
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
