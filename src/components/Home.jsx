import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import buildingImg from "./visuals/building.jpg";
import wave from "./visuals/wave.mp4";

const Home = (props) => {
  //scroll-effect
  const imgRef = useRef();
  const vidRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          entry.target.classList.toggle("show", entry.isIntersecting);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(imgRef.current);
    observer.observe(vidRef.current);
  }, []);

  //developer-tools and programming-languages
  const tools = ["VSCode", "Eclipse", "MySQL", "GitHub"];
  const languages = ["(React)", "HTML", "CSS", "JavaScript", "Java", "SQL"];

  return (
    <div className="main" id="home">
      <h2 className="heading">Web Developer, Programmer</h2>

      <div className="message-div">
        <p className={`greeting ${props.loading}`}>
          <span className="greeting-element">
            Hello, my name is Moohyun Kang.&nbsp;
          </span>
          <span className="greeting-element">Nice to meet you</span>
        </p>
        <p className="intro">
          I'm a programmer who loves to play around with code and learn new
          things.
        </p>
      </div>

      <div className="back-div">
        <div className="back-div-sub">
          <h4 className="back-div-sub-title">Development Tools</h4>
          <ul className="list-container" id="tool-container">
            {tools.map((tool) => {
              return (
                <li key={tool} className="list-element">
                  {tool}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="back-div-sub">
          <h4 className="back-div-sub-title">Programming Langauges</h4>
          <ul className="list-container" id="lang-container">
            {languages.map((lang) => {
              return (
                <li key={lang} className="list-element">
                  {lang}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="visual-div" id="image-div" ref={imgRef}>
        <div className="visual-container" id="image-container">
          <img id="home-image" alt="building" src={buildingImg}></img>
          <span className="citation">Photo by Alexander Kozlov</span>
        </div>

        <div className="text-container">
          <p className="visual-line">
            <span className="visual-word">Efficient,&nbsp;</span>Concise and
            structured coding.
          </p>
        </div>
      </div>

      <div className="visual-div" id="video-div" ref={vidRef}>
        <div className="visual-container" id="video-container">
          <video
            id="home-video"
            autoPlay
            muted
            loop
            src={wave}
            type="video/mp4"
          ></video>
          <span className="citation">Video by Nothing Ahead from Pexels</span>
        </div>

        <div className="text-container">
          <p className="visual-line">
            <span className="visual-word">Dynamic,&nbsp;</span>make static page
            comes to life
          </p>
        </div>
      </div>

      <Link className="next-anchor" to="./my-portfolio/about">
        <button className={`next-button ${props.theme}`}>
          <p className={`next-text ${props.theme}`}>Next</p>
        </button>
      </Link>
    </div>
  );
};

export default Home;
