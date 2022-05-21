const Contact = () => {
  return (
    <div className="main" id="contact">
      <h2>Contact</h2>
      <div className="back-div" id="first-back-div">
        <p>Location: Winnipeg, MB Canada</p>
      </div>
      <p> Email: moohka@hotmail.com</p>
      <div className="back-div">
        <p>Phone: 204-396-6564</p>
      </div>
      <div className="back-div" id="last-back-div">
        <p>
          GitHub:{" "}
          <a href="http://github.com/moohka" target="_blank">
            moohka
          </a>
        </p>
      </div>
      <div id="thanks">Thank You</div>
    </div>
  );
};

export default Contact;
