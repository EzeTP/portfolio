import "./topbar.scss";
import { GoPerson } from "react-icons/go";
import { GoMail } from "react-icons/go";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            EzeTP.
          </a>
          <div className="itemContainer">
            <GoPerson className="person" />
            <span className="span">+54 9 380 459-2298</span>
          </div>
          <div className="itemContainer">
            <GoMail className="mail" />
            <span className="span">tejada.eap@gmail.com</span>
          </div>
          <div className="itemContainer">
            <BsGithub className="mail" />
            <a
              href="https://github.com/EzeTP"
              target="_blank"
              rel="noopener noreferrer"
            >
              EzeTP
            </a>
          </div>
          <div className="itemContainer">
            <BsLinkedin className="mail" />
            <a
              href="https://www.linkedin.com/in/ezequiel-tejada-40a4811a2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ezequiel Tejada
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
