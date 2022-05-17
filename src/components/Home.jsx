import { useState, useRef } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  const [output, setOutput] = useState();
  const formatCount = () => {
    return count === 0 ? "Zero" : count;
  };
  const formatOutput = () => {
    return output === "" || output == null ? "Output display here" : output;
  };
  const inputField = useRef();

  return (
    <div className="main" id="home">
      <h2>Home</h2>
      <h3>Count: {formatCount()}</h3>
      <button id="decrement-button" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button id="increment-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button id="reset-button" onClick={() => setCount(0)}>
        Reset
      </button>
      <div id="some-space"></div>
      <div>
        <input
          id="input-field"
          ref={inputField}
          onChange={(event) => setOutput(event.target.value)}
        ></input>
        <button
          id="clear-button"
          onClick={(event) => {
            setOutput(event.target.value);
            inputField.current.value = "";
            inputField.current.focus();
          }}
        >
          clear
        </button>
        <output id="output1">{formatOutput()}</output>
        <br/>
        <output id="output2">____________</output>
      </div>
    </div>
  );
};

export default Home;
