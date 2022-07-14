import ContactForm from "./ContactForm";

const Contact = () => {
 

  return (
    <div className="main" id="contact">
      <h2 className="main-header">Contact</h2>
      <div id="contact-divider"></div>

      <div className="back-div">
        <ContactForm></ContactForm>
      </div>

      <div id="thanks">Thank You!</div>
    </div>
  );
};

export default Contact;
