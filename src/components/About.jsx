import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <div className="main" id="about">
      <h2 className="main-header">About</h2>

      <div className="back-div">
        <p id="about-me">
          &nbsp;Hello, I am a web developer based in Winnipeg, MB Canada.
          <br></br>
          &nbsp;Initially, I studied aviation in Providence UC. However, I felt
          that it was not for me. I dropped out of the school during Covid time
          and looked for different career path. And I came across with Computer
          Science.
          <br></br>
          &nbsp;I enrolled into a certificate program, Software Development,
          offered by Red River College. I learned general computer science,
          relational database (SQL) and Java. During the learning, I found my
          interest in Web Development. So, I learned it on my own.
          <br></br>
          &nbsp;I'm looking forward to make the leap and continue refining my
          skills with the right company.
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
