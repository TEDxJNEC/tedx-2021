import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import "../common/nav.scss";
import img from "../assets/JNEC.svg";
import { MenuIcon } from "./Icons/MenuIcon";

const Navbar = () => {
  const { HOME, ABOUT } = ROUTES;
  // state = {
  //   toggle:false
  // }
   const handleClick = () => {
  //   this.setState(toggle:!this.state.toggle)
     
   }
   return (
    <>
    
      <nav>
        <div className="logo">
          <img src={img} className="logo_tedx" alt="TEDxJNEC_logo" />
        </div>
        <div className="menu_logo" onClick={handleClick}>
          <MenuIcon />
        </div>
        <ul className="links">
          <NavLink to={HOME} exact activeClassName="active" className="title">
            HOME
          </NavLink>
          <NavLink to="gy" exact activeClassName="active" className="title">
            SPEAKERS
          </NavLink>
          <NavLink to={ABOUT} exact activeClassName="active" className="title">
            ABOUT
          </NavLink>
          <NavLink to="gfsdh" exact activeClassName="active" className="title">
            BOOKING
          </NavLink>
          <NavLink to="xc" exact activeClassName="active" className="title">
            TEAM
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
