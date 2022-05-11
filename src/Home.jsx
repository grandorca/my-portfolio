let state = {
  count: 0,
};

//useState hooks

const Home = () => (
  <div className="home">
    <h1>Home</h1>
    <h3>Count: {state.count}</h3>
    <button id="decrement">Decrement</button>
    <button id="increment">Increment</button>
    <button id="reset">Reset</button>
  </div>
);
export default Home;
