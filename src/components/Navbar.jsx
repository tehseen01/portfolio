import React, { useState } from "react";
import "../SASS/navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [changeIcon, setChangeIcon] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handelClick = () => {
    setChangeIcon(!changeIcon);
    setShowMenu(!showMenu);
  };

  const removeNav = () => {
    setChangeIcon(false);
    setShowMenu(false);
  };

  return (
    <header>
      <div
        className={`menu-icon ${changeIcon ? "close" : ""}`}
        onClick={handelClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`${showMenu ? "show" : ""} nav-links`}>
        <NavLink className="item" onClick={removeNav} to="/">
          Home
        </NavLink>
        <NavLink className="item" onClick={removeNav} to="/about">
          About
        </NavLink>
        <NavLink className="item" onClick={removeNav} to="/work">
          Work
        </NavLink>
        <NavLink className="item" onClick={removeNav} to="/contact">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
