import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import buildingImg from "./visuals/building.jpg";
import wave from "./visuals/beach-wave.mp4";

const Home = (props) => {
  //observer
  const imgRef = useRef();
  const vidRef = useRef();
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
        <p id="intro">
          I'm a programmer who loves to play around with code and learn new
          things.
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

      <div className="image-div" ref={imgRef}>
        <div className="image-container">
          <img alt="building" src={buildingImg}></img>
          <span className="citation">Photo by Alexander Kozlov</span>
        </div>
        <div className="visual-text" id="right-side">
          <p>Concise coding with scructure.</p>
        </div>
      </div>

      <div className="big-space"></div>

      <div className="video-div" ref={vidRef}>
        <div className="visual-text" id="left-side">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
            culpa
          </p>
        </div>
        <div className="video-container">
          <video autoPlay muted loop src={wave} type="video/mp4"></video>
          <span className="citation">Video by Nothing Ahead from Pexels</span>
        </div>
      </div>

      <Link className="next-anchor" to="/about">
        <button className={`next-button ${props.theme}`}>Next</button>
      </Link>
    </div>
  );
};

export default Home;
