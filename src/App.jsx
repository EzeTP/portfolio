import "./app.scss";
import React from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import About from "./components/about/About";
import Works from "./components/works/Works.jsx";
import Contact from "./components/contact/Contact.jsx";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
