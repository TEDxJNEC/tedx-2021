import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import "../common/nav.scss";
import img from "../assets/JNEC.svg";
import { MenuIcon } from "./Icons/MenuIcon";
const { HOME, ABOUT } = ROUTES;

const Navbar = () => {
  
  const [active,setActive] = useState(false)
     
  const Toggle = () => {
    setActive(!active);
  };
  
  const addClass = () =>{
    let classes = "links"
    if (active)
    {
      classes += " on"
    }
    return classes
  }
   return (
    <>
    
      <nav>
        <div className="logo">
          <img src={img} className="logo_tedx" alt="TEDxJNEC_logo" />
        </div>
        <ul className={addClass()}>
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
        <div className="menu_logo" onClick={Toggle}>
          <MenuIcon />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
