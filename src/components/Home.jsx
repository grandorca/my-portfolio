import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import buildingImg from "./visuals/building.jpg";
import sunSet from "./visuals/sun-set.mp4";

const Home = (props) => {
  const imgRef = useRef();
  const vidRef = useRef();

  //observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        entry.target.classList.toggle("show", entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(imgRef.current);
    observer.observe(vidRef.current);
  }, []);

  return (
    <div className="main" id="home">
      <h2 className="heading">Front-end Developer, Software Developer</h2>

      <div>
        <p id="greeting">
          Hello, my name is <span id="my-name">Moohyun Kang</span>. Nice to meet
          you
        </p>
      </div>

      <div className="back-div">
        <div className="back-sub-div">
          <h4>Development Tools</h4>
          <br></br>
          <ul id="dev-tool">
            <li>VSCode</li>
            <li>Eclipse</li>
            <li>MySQL</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="back-sub-div">
          <h4>Programming Langauges</h4>
          <br></br>
          <ul id="program-lang">
            <li>&#40;React&#41;</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>

      <div className="image-div">
        <img alt="building" src={buildingImg} ref={imgRef}></img>
        <div id="visual-by">Photo by Alexander Kozlov from Pexels</div>
      </div>

      <div className="big-space"></div>

      <div className="video-div">
        <div id="visual-by">Video by Kmeel Stock from Pexels</div>
        <video autoPlay muted loop ref={vidRef}>
          <source src={sunSet} type="video/mp4"></source>
        </video>
      </div>

      <Link className="next-anchor" to="/about">
        <button className={`next-button ${props.theme}`}>Next</button>
      </Link>
    </div>
  );
};

export default Home;
