import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <div className="main" id="about">
      <h2>About Me</h2>
      <div className="back-div">
        <p>
          &nbsp;I'm a front-end web developer with a background in software
          development. <br></br>I have strong foundation for web development and
          building complex solutions.
          <br></br>Recently, I graduated from Red River College, Software
          Development Programe. I am passionate about coding and solving
          problems through code, and I am excited to work alongside other
          amazing programmers and learn so much more!
        </p>
      </div>

      <Link className="next-anchor" to="/contact">
        <button className={`next-button ${props.theme}`}>Next</button>
      </Link>
    </div>
  );
};

export default About;
