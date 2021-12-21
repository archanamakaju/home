import React from "react";
import icon from "../../images/Vectoricon.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerPart">
          <div className="part1">
            <div className="logo-part11">
              <p>Synical</p>
              <p>Bot</p>
            </div>
            <div className="part1-text">
              <div className="icon-text">
                <img src={icon} alt="icon" />
                <p>Email: admin@gmail.com</p>
              </div>

              <p>Copyright © Synical Bot, 2021</p>
            </div>
          </div>

          <div className="part2">
            <p>Pages</p>
            <div className="footer-list">
              <ul>
                <NavLink to="/home">
                  <li>Home</li>
                </NavLink>
                <NavLink to="/commands">
                  <li>Commands</li>
                </NavLink>
                <NavLink to="/developers">
                  <li>Developers</li>
                </NavLink>
                <NavLink to="/docs">
                  <li>Docs</li>
                </NavLink>
                <NavLink to="/contactus">
                  <li>Contact Us</li>{" "}
                </NavLink>
              </ul>
            </div>
          </div>
          <div className="part3">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
          </div>
          <div className="part4">
            <button>Add to Discord</button>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
