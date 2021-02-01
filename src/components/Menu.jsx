import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import "../common/nav.scss";
import img from "../assets/JNEC.svg";
import { MenuIcon } from "./icons/MenuIcon";
const { HOME, ABOUT } = ROUTES;


const Desktop = () => {
    const { HOME, ABOUT } = ROUTES;
    return(
        <>
         <nav>
        <div className="logo">
          <img src={img} className="logo_tedx" alt="TEDxJNEC_logo" />
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
    )
}
 
const Mobile = () => {
    const [active,setActive] = useState(false)
    const [navClass,setNavClass]=useState("mobile_menu")
    const Toggle = () => {
      setNavClass(active? "mobile_menu outanimation" :'mobile_menu inanimation')
      !active?document.body.classList.add('roll'):document.body.classList.remove('roll')
      setActive(!active);
     
    };

      const addclass = () =>
      {
          let eventasd = "mobile_menu ";
          if (active)
          {
              eventasd += " inanimation"
              document.body.classList.add("no-sroll")

          }
          else{
            eventasd += " outanimation"
            document.body.classList.remove("no-sroll")

          }
          return eventasd;
      } 
   
  
    return (
        <>
    <nav>
    <div className="logo">
      <img src={img} className="logo_tedx" alt="TEDxJNEC_logo" />
    </div>
    


{active ? (<> 
  <div className="close_logo" onClick={Toggle}>
     <h1>close</h1>
    </div></>):    <div className="menu_logo" onClick={Toggle}>
      <MenuIcon />
    </div>}
    <div className={navClass}>
        <ul className="mobi_links">
          <NavLink to={HOME} exact activeClassName="active" className="mobi_title">
            HOME
          </NavLink>
          <NavLink to="gy" exact activeClassName="active" className="mobi_title">
            SPEAKERS
          </NavLink>
          <NavLink to={ABOUT} exact activeClassName="active" className="mobi_title">
            ABOUT
          </NavLink>
          <NavLink to="gfsdh" exact activeClassName="active" className="mobi_title">
            BOOKING
          </NavLink>
          <NavLink to="xc" exact activeClassName="active" className="mobi_title">
            TEAM
          </NavLink>
        </ul>
    </div>
    </nav>
    </>
    )
}

const Menu = () => {
  
  const [isMobile,setMobile] =  useState(window.screen.width<720);

  
   return (
    <> 
     {isMobile ? <Mobile />:<Desktop />}
    </>
  );
};

export default Menu;