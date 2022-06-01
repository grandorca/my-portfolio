import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import NotFound from "./NotFound";

const App = () => {
  //scroll-to-the-top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  //dynamic-title
  useEffect(() => {
    let location =
      pathname === "/" ? "Home" : pathname === "/about" ? "About" : "Contact";
    document.title = "My Portfolio | " + location;
  }, [pathname]);

  //theme-switch
  const [btnTheme, setBtnTheme] = useState("dark");

  return (
    <>
      <div className="not-footer">
        <Header changeTheme={setBtnTheme}></Header>
        <Routes>
          <Route path="/" element={<Home theme={btnTheme}/>} />
          <Route path="/about" element={<About theme={btnTheme}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
};
export default App;
