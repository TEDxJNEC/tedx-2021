import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import "../common/nav.scss";
import img from "../assets/JNEC.svg";
import { MenuIcon } from "./icons/MenuIcon";
const { HOME, ABOUT } = ROUTES;

const OpenList = () => {

  return(
      <>
      
      <div className="mobile_menu">
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
      </>
  )
}

const Desktop = () => {
    const { HOME, ABOUT } = ROUTES;
    const [isMobile,setMobile] =  useState(
      false
    );
    useEffect(() => { 
       // window.addEventListener("resize",() => {
       //   setMobile(window.matchMedia("(max-width:759px)").matches);  
       // });
       if (window.screen.width <= 760) {
         setMobile(true)
         
       }
    }, []);
    const [activeMobile,setActiveMobile] = useState(false)
     
    const Toggle = () => {
      setActiveMobile(!activeMobile);
      
  
    };
    return(
        <>
         <nav>
        <div className="logo">
          <img src={img} className="logo_tedx" alt="TEDxJNEC_logo" />
        </div>
        {isMobile ? <> <div className="menu_logo" onClick={Toggle}> <MenuIcon /> </div></>: <ul className="links">
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
        </ul>}
      </nav>
        </>
    )
}
 
const Mobile = () => {
    const [activeMobile,setActiveMobile] = useState(false)
     
    const Toggle = () => {
      setActiveMobile(!activeMobile);
  
    };
    return (
        <>
    <nav>
    {/* <div className="logo">
      <img src={img} className="logo_tedx" alt="TEDxJNEC_logo" />
    </div> */}
    <div className="menu_logo" onClick={Toggle}>
      Close
    </div>
{activeMobile ? (<div className="mobile_menu">
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
    </div>):null}
    
    </nav>
    </>
    )
}

const Navbar = () => {
  
  // const [isMobile,setMobile] =  useState(
  //    false
  // );
  // useEffect(() => { 
  //     // window.addEventListener("resize",() => {
  //     //   setMobile(window.matchMedia("(max-width:759px)").matches);  
  //     // });
  //     if (window.screen.width <= 760) {
  //       setMobile(true)
        
  //     }
  // });
  
   return (
    <> 
     {/* {isMobile ? <Mobile /> : <Desktop />} */}
     <Desktop />
    </>
  );
};

export default Navbar;
