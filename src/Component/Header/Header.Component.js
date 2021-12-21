import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import hamburger from "../../images/hamburger.svg";

// import "../Header/Header.css";
const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  useEffect(() => {
    console.log(isHamburgerOpen);
  }, [isHamburgerOpen]);

  return (
    <>
      <header>
        <div className="wrappers">
          <div className="logo">
            <p>Synical</p>
            <p>Bot</p>
          </div>

          <div className="nav-bar">
            <img
              src={hamburger}
              className="burger"
              onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
              alt="hamburger"
            />
            <nav>
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/commands">Commands</NavLink>
              <NavLink to="/developers">Developers</NavLink>
              <NavLink to="/docs">Docs</NavLink>
              <NavLink to="/contactus">Contact Us </NavLink>
              <NavLink to="/discord">Add to Discord</NavLink>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
