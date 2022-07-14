const ContactForm = ()=>{

    return (
        <form
          action="https://formsubmit.co/moohka@hotmail.com"
          method="POST"
          className="contact-form"
        >
          <div className="form-element" id="form-element-name">
            <input
              className="form-input"
              type="text"
              placeholder="Your Name"
              name="Name"
              required
            ></input>
            <label className="form-label">Your Name</label>
          </div>

          <div className="form-element" id="form-element-email">
            <input
              className="form-input"
              type="text"
              placeholder="Your Email"
              name="Email"
              required
            ></input>
            <label className="form-label">Your Email</label>
          </div>

          <div className="form-element" id="form-element-textarea">
            <textarea
              className="form-input"
              id="textarea-input"
              placeholder="How can I help you?"
              badinput="false"
              maxLength="500"
              name="Message"
              required
            ></textarea>
            <label className="form-label" id="textarea-label">
              How can I help you?
            </label>
          </div>

          <input type="submit" id="submit-input"></input>
        </form>
    );
}
export default ContactForm;