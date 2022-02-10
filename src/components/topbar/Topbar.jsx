import "./topbar.scss";
import { GoPerson } from "react-icons/go";
import { GoMail } from "react-icons/go";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Logo.
          </a>
          <div className="itemContainer">
            <GoPerson className="person" />
            <span className="span">+54 555 555 55</span>
          </div>
          <div className="itemContainer">
            <GoMail className="mail" />
            <span className="span">mailmail@mail.com</span>
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
