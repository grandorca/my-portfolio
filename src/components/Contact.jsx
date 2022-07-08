import { useEffect, useState } from "react";

const Contact = (props) => {
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
    <div className="main" id="contact">
      <h2>Contact Info</h2>

      <div id="contact-divider"></div>

      <div className="back-div" id="first-back-div">
        <p>
          <span className="contact-key">
            <i className="bx bx-current-location"></i>Location:&nbsp;
          </span>
          <span className="contact-value">Winnipeg, MB Canada</span>
        </p>
      </div>

      <div className="back-div" id="second-back-div">
        <p>
          <span className="contact-key">
            <i className={`bx bx${icon}-envelope`}></i> Email:&nbsp;
          </span>
          <a className="contact-value" href="mailto:moohka@hotmail.com">
            moohka@hotmail.com
          </a>
        </p>
      </div>

      <div className="back-div" id="third-back-div">
        <p>
          <span className="contact-key">
            <i className="bx bxl-codepen"></i> CodePen:&nbsp;
          </span>
          <a
            className="contact-value"
            href="https://codepen.io/moohka"
            target="_blank"
            rel="noreferrer"
          >
            @moohka
          </a>
        </p>
      </div>

      <div className="back-div" id="last-back-div">
        <p>
          <span className="contact-key">
            <i className="bx bxl-github"></i>
            GitHub:&nbsp;
          </span>
          <a
            className="contact-value"
            href="https://github.com/moohka"
            target="_blank"
            rel="noreferrer"
          >
            moohka
          </a>
        </p>
      </div>

      <div id="thanks">Thank You</div>
    </div>
  );
};

export default Contact;
