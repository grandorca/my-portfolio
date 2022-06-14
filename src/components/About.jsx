import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <div className="main" id="about">
      <h2>About Me</h2>

      <div className="back-div">
        <p id="about-me">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          necessitatibus iusto amet laborum reiciendis obcaecati. Doloremque,
          quis asperiores. Excepturi voluptatibus aperiam debitis est? Eaque
          ullam ad officia, inventore nobis eveniet itaque dolorum nemo. Dolores
          et, quos saepe optio a minima consequuntur maxime? Magni quidem fugit
          velit exercitationem rerum corporis nisi perspiciatis adipisci ad
          porro impedit, blanditiis cupiditate est quos minus laudantium fugiat,
          odio earum corrupti quisquam quis doloremque veritatis nihil
          inventore. Nihil odio suscipit amet, corporis mollitia beatae
          blanditiis obcaecati nostrum harum. Tempore, aperiam rerum. Facere
          deleniti ea et praesentium, impedit numquam corrupti, voluptas,
          asperiores magnam omnis velit tenetur excepturi?
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
