import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import "../common/nav.scss";
import img from "../assets/JNEC.svg";
import { MenuIcon } from "./Icons/MenuIcon";
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
    const [cilcked,setClicked] = useState(false)
    const Toggle = () => {
      setActive(!active);
  
    };
    const Toggle1 = () => {
        setClicked(!cilcked);
    
      };
      const addclass = () =>
      {
          let eventasd = "mobile_menu ";
          if (active)
          {
              eventasd += " inanimation"
          }
          return eventasd;
      } 
      const addclass1 = () =>
      {
          let eventasd = "mobile_menu";
          if (cilcked)
          {
              eventasd += " outanimation"
          }
          return eventasd;
      }      
  
    return (
        <>
    <nav>
    <div className="logo">
      <img src={img} className="logo_tedx" alt="TEDxJNEC_logo" />
    </div>
    
    <div className="menu_logo" onClick={Toggle}>
      <MenuIcon />
    </div>
    <div className="close_logo" onClick={Toggle1}>
     <h1>close</h1>
    </div>
{active ? (<> <div className={addclass()}>
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
    </div></>):null}
{cilcked ? (<> <div className= {addclass1()}>
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
    </div></>):null}
  
    </nav>
    </>
    )
}

const Menu = () => {
  
  const [isMobile,setMobile] =  useState(
      window.matchMedia("(max-width:759px)").matches
  );
  useEffect(() => { 
      window.addEventListener("resize",() => {
        setMobile(window.matchMedia("(max-width:759px)").matches);  
      });
  });
  
   return (
    <> 
     {isMobile ? <Mobile />:<Desktop />}
    </>
  );
};

export default Menu;