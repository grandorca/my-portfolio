import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  AOS.init();

  return (
    <div className="main" id="home">
      <h2 className="heading">Front-end Developer, Software Developer</h2>
      <p id="greeting">
        Hello, my name is <span id="my-name">Moohyun Kang</span>. Nice to meet
        you
      </p>
      <br></br>
      <div className="back-div">
        <div className="small-box">
          <h4>Development Tools</h4>
          <br></br>
          <ul id="dev-tool">
            <li>VSCode</li>
            <li>Eclipse</li>
            <li>MySQL</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="small-box">
          <h4>Programming Langauges</h4>
          <br></br>
          <ul id="program-lang">
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
      <div style={{ display: "block" }} data-aos="fade-up">
        <div className="front-div">
          <h2>My Projects</h2>
          <div className="project-container">
            <div className="project-element" data-aos="fade-up"></div>
            <div className="project-element" data-aos="fade-up"></div>
            <div className="project-element" data-aos="fade-up"></div>
          </div>
        </div>
      </div>
      <Link className="next-anchor" to="./about">
        <button className="next-button">Next</button>
      </Link>
    </div>
  );
};

export default Home;
