import { Link } from "react-router-dom";

const About = () => {

  

  return (
    <div className="main" id="about">
      <h2>About Me</h2>
      <div className="back-div">
        <p>
          &nbsp;When I first started coding...\nLorem ipsum dolor sit amet,
          <br></br>
          consectetur \nadipiscing elit, sed do eius&#160;mod tempor incid&#160;idunt &#160;ut
          \nlabore et dolore magna aliqua. Ut enim ad minim veniam, \nquis
          <br></br>
          nostrud exercitation ullamcdddddddddd o labord
          <br></br>
          is nisi ut aliquip ex ea commo do consequat.\n\n Du is aute irure
          dolor in reprehenderit in voluptate
          <br></br>
          velit esse \ncillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, \nsunt in culpa qui officia deserunt
          <br></br>
          mollit anim id est laborum.\n"
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
