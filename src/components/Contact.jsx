import { useEffect,useState } from "react";

const Contact = (props) => {

  const [icon, setIcon] = useState("");
  useEffect(()=>{
    if (props.theme==="light"){
      setIcon("");
    }else{
      setIcon("s");
    }
  })
  return (
    <div className="main" id="contact">
      <h2>Contact Info</h2>
      <div className="back-div" id="first-back-div">
        <p><i class='bx bx-current-location' ></i>Location: Winnipeg, MB Canada</p>
      </div>
      <div className="back-div" id="second-back-div">
        <p>
          <i class={`bx bx${icon}-envelope`}></i> Email: moohka@hotmail.com
        </p>
      </div>
      <div className="back-div" id="third-back=div">
        <p>
          <i class={`bx bx${icon}-phone`}></i>Phone: 204-***-****
        </p>
      </div>
      <div className="back-div" id="last-back-div">
        <p>
          <i class="bx bxl-github"></i>
          GitHub:
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
