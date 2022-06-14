import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <div className="main" id="about">
      <h2>About Me</h2>

      <div className="back-div">
        <p id="about-me">
          &nbsp;At first I studied aviation in Providence UC. However,
          <br></br>
          &nbsp;I finished certificate program, Software Development in Red
          River College. I learned general computer science, database(SQL) and
          Java. However, I found my interest in Web Development even thought it
          was not part of the curriculum. I self taught HTML, CSS, JavaScript
          and React.
          <br></br>
          &nbsp;I'm excited to make the leap and continue refining my skills
          with the right company. Drop me a line and/or your favourite
          restaurant in Toronto in the contact form below or check me out
          at:experiences for a variety of clients. I recently finished a
          certificate program from Red River College (RRC).
        </p>
      </div>

      <Link className="next-anchor" to="/contact">
        <button className={`next-button ${props.theme}`}>
          <p className={`next-text ${props.theme}`}>Next</p>
        </button>
      </Link>
    </div>
  );
};

export default About;
