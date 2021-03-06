import React, { useState } from "react";
import "./works.scss";
import img from "../../assets/weatherapp.png";
import rick from "../../assets/rickandmortyapp.png";
import chat from "../../assets/chatapp.png";
import spa from "../../assets/spa.png";
import canch from "../../assets/canchera.png";

const Works = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: 1,
      title: "Videogames App",
      desc: "SPA, using React, Redux, Nodejs, Sequelize and PostgresSQL",
      img: spa,
    },
    {
      id: 2,
      title: "Weather app",
      desc: "This is a web app created using React. The information is brought via an API called Open Weather Map.",
      img: img,
    },
    {
      id: 3,
      title: "Rick and Morty Wiki",
      desc: "A react app created using React and consuming the Rick&Morty API",
      img: rick,
    },
    {
      id: 4,
      title: "SuperChat",
      desc: "A  chat created using React and firebase",
      img: chat,
    },
    {
      id: 5,
      title: "Canchera",
      desc: "football field reservation manager",
      img: canch,
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
