import "./style/hello.css";

let state = {
  count: 0,
};

function formatCount() {
  let count = state.count;
  return count === 0 ? "Zero" : count === 10 ? "Ten" : count;
}
function addOne() {
  state.count += 1;
  return console.log(state.count);
}
function removeOne() {
  state.count -= 1;
  return console.log(state.count);
}

function Buttons(props) {
  return (
    <div>
      <div className="title">
        <h1 id="hw">Hello World {formatCount()}</h1>
      </div>
      <button
        onClick={() => {
          removeOne();
          document.querySelector("h1").innerHTML =
            "Hello World " + formatCount();
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          addOne();
          document.querySelector("h1").innerHTML =
            "Hello World " + formatCount();
        }}
        id ="incr"
      >
        Increment
      </button>
    </div>
  );
}
export default Buttons;
