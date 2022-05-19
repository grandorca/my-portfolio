const Home = () => {
  return (
    <div className="main" id="home">
      <h2 className="heading">Front-end Developer, Software Developer</h2>

      <p>
        Hello, my name is <span id="my-name">Moohyun Kang</span>. Nice to meet
        you
      </p>
      <br></br>
      <div className="top-div">
        <div className="small-box">
          <p>Development Tools</p>
          <br></br>
          <ul id="dev-tool">
            <li>VSCode</li>
            <li>Eclipse</li>
            <li>MySQL</li>
            <li>Terminal</li>
          </ul>
        </div>
        <div className="small-box">
          <p>Programming Langauges</p>
          <br></br>
          <ul id="program-lang">
            <li></li>
            <li>asdf</li>
            <li>zxcv</li>
            <li>qazw</li>
          </ul>
        </div>
      </div>

      <div className="mid-div">
        <h2>My Projects</h2>
        <div className="project-container">
          <div className="project-element"></div>
          <div className="project-element"></div>
          <div className="project-element"></div>
        </div>
      </div>
      <button className="next-button">Next</button>
    </div>
  );
};

export default Home;
