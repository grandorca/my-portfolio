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
      <button id="decrementButton" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button id="incrementButton" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button id="resetButton" onClick={() => setCount(0)}>
        Reset
      </button>
      <div id="somespace"></div>
      <div>
        <input
          id="inputField"
          ref={inputField}
          onChange={(event) => setOutput(event.target.value)}
        ></input>
        <button
          id="clearButton"
          onClick={(event) => {
            setOutput(event.target.value);
            inputField.current.value = "";
            inputField.current.focus();
          }}
        >
          clear
        </button>
        <p id="output">{formatOutput()}</p>
      </div>
    </div>
  );
};

export default Home;
