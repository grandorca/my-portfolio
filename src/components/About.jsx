import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <div className="main" id="about">
      <h2>About Me</h2>
      <div className="back-div">
        <p>
          &nbsp;When I first started coding... I started with aviation.
          <br></br>
          However, soon after I found that it was not for me.
          <br></br>
          &nbsp;nostrud exercitation ullamcdddddddddd o labord
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

      <Link className="next-anchor" to="/contact">
        <button className={`next-button ${props.theme}`}>Next</button>
      </Link>
    </div>
  );
};

export default About;
