import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <h1 id="title">Moohyun Kang</h1>
      </header>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="./">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="./about">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="./contact">Contact</Link>
          </li>
          <div className="navbar-item" id="theme-switcher">
            <ul className="dropdown">
              <li className="dropdown-item">
                <a id="light-theme" href="/">
                  light
                </a>
              </li>
              <li className="dropdown-item">
                <a id="dark-theme" href="/">
                  dark
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Header;
