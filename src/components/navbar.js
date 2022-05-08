
class First {
  constructor(count, tags) {
    this.count = 0;
    this.tags = ["Contact", "About", "Menu"];
  }
  add() {
    this.count += 1;
  }
  subtract() {
    this.count -= 1;
  }
}

function NavBar() {
  let second = {
    img: "https://picsum.photos/200",
  };
  const obj = new First();
  return (
    <div>
      <ul>
        {obj.tags.map((tags) => (
          <li key={tags}>{tags}</li>
        ))}
      </ul>
      <p style={{ color: "black" }}>llamco occaecat</p>
      <img src={second.img} alt="mountain"/>
    </div>
  );
}

export default NavBar;
