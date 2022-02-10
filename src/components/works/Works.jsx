import React, { useState } from "react";
import "./works.scss";
import img from "../../assets/weatherapp.png";
import rick from "../../assets/rickandmortyapp.png";

const Works = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: 1,
      title: "Weather app",
      desc: "Lorem odit quos sit illum perferendis enim deleniti dolorum culpa voluptas mo.",
      img: img,
    },
    {
      id: 1,
      title: "Rick and Morty",
      desc: "Lorem odit quos sit illum perferendis enim deleniti dolorum culpa voluptas mo.",
      img: rick,
    },
    {
      id: 2,
      title: "Rampa UI Design",
      desc: "Lorem odit quos sit illum perferendis enim deleniti dolorum culpa voluptas mo.",
      img: "https://cdn.dribbble.com/users/702789/screenshots/15054318/media/4ea5d492b7b07eebc9528ff960794879.png?compress=1&resize=1200x900",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
      : setCurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.img} alt="img not found" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>
                    <a href="#portfolio">Projects</a>
                  </span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="imgnotfound" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt="imgnotfound"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt="imgnotfound"
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default Works;
