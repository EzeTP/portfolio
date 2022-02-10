import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1200,
      backSpeed: 60,
      strings: [
        "Creativity",
        "Teamwork",
        "Patience",
        "Problem solving ",
        "Self learning",
        "Time management",
      ],
    });
  }, []);
  return (
    <div className="Intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="img not found" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ezequiel Tejada</h1>
          <h3>
            Front-end Developer <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#about">
          <img src="assets/down.png" alt="img not found" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
