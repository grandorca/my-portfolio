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

      <div className="back-div" id="first-back-div">
        <p>
          <i className="bx bx-current-location"></i>Location: Winnipeg, MB
          Canada
        </p>
      </div>

      <div className="back-div" id="second-back-div">
        <p>
          <i className={`bx bx${icon}-envelope`}></i> Email:&nbsp;
          <a href="mailto:moohka@hotmail.com">moohka@hotmail.com </a>
        </p>
      </div>

      <div className="back-div" id="last-back-div">
        <p>
          <i className="bx bxl-github"></i>
          GitHub:&nbsp;
          <a href="http://github.com/moohka" target="_blank" rel="noreferrer">
            moohka
          </a>
        </p>
      </div>

      <div id="thanks">Thank You</div>
    </div>
  );
};

export default Contact;
