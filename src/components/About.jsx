import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  AOS.init();

  return (
    <div className="main" id="about">
      <h2>About Me</h2>
      <div className="back-div">
        <p>
          I started doing software development.
          <br></br>I change my path to software engineering
          <br></br>
          front-end development
          <br></br>
          from where
          <br></br>
          to the top
        </p>
      </div>
      <div className="center-next-button">
        <Link className="next-anchor" to="/contact">
          <button className="next-button">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
