import { useEffect, useState } from "react";

const Footer = (props) => {
  //change-theme-icon
  const [icon, setIcon] = useState("");
  useEffect(() => {
    if (props.theme === "light") {
      setIcon("");
    } else {
      setIcon("s");
    }
  }, [props.theme]);

  return (
    <footer className="footer">
      <a
        className="footer-element"
        href="mailto:moohka@hotmail.com"
      >
        <i className={`bx bx${icon}-envelope`}></i>
      </a>

      <a
        className="footer-element"
        href="https://codepen.io/moohka"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bx bxl-codepen"></i>
      </a>

      <a
        className="footer-element"
        href="https://github.com/moohka"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bx bxl-github"></i>
      </a>

      <p className="footer-element" id="copyright">
        © 2022 Moohyun Kang. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
