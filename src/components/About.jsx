import { Link } from "react-router-dom";

const About = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {console.log(data[2].company.name)})
    .catch((error) => {
      console.log(error);
    });

  const aboutMe = "qwer\nasdf\nzxcv";
  return (
    <div className="main" id="about">
      <h2>About Me</h2>
      <div className="back-div">
        <pre>qwer asdf zxcsdfsd fv</pre>
        <pre>{aboutMe}</pre>
        <pre>{"qwer     asdf      zxcv"} </pre>
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
