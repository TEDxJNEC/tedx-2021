import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import "../common/nav.scss";
import img from "../assets/tedxjneclogo_white.svg";
import { MenuIcon } from "./Icons/MenuIcon";

const Navbar = () => {
  const { HOME, ABOUT } = ROUTES;
  return (
    <>
      <nav>
        <div className="logo">
          <img src={img} className="logo_tedx" alt="TEDxJNEC_logo" />
        </div>
        <div className="menu_logo">
          <MenuIcon />
        </div>
        <ul className="links">
          <NavLink to={HOME} exact activeClassName className="title">
            HOME
          </NavLink>
          <NavLink to="/" exact activeClassName className="title">
            SPEAKERS
          </NavLink>
          <NavLink to={ABOUT} exact activeClassName className="title">
            ABOUT
          </NavLink>
          <NavLink to="/" exact activeClassName className="title">
            BOOKING
          </NavLink>
          <NavLink to="/" exact activeClassName className="title">
            TEAM
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
