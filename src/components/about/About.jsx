import "./about.scss";
import { icons } from "../../data";
import pdf from "../../docs/Ezequiel Tejada.pdf";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profile.png" alt="img not found" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>“Code is like humor. When you have to explain it, it's bad.”</h2>
          <h5>– Cory House</h5>
          <p>
            👋 Hello! My name is Ezequiel and I'm a teacher of English and
            front-end enthusiast. I enjoy learning new technologies as well as
            creating beautiful websites. Some of my skills include HTML, CSS,
            SASS, JavaScript, React, Redux, NodeJS, Express, PostgreSQL, and
            Sequelize.
          </p>
        </div>
        <div className="container">
          <h1>Skills</h1>
          <div className="imgContainer">
            {icons?.map((i) => (
              <div className="item">
                <img src={i.img} alt="img not found" />
                <h5>{i.title}</h5>
              </div>
            ))}
          </div>
          <a href={pdf} download={pdf} className="myButton">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
