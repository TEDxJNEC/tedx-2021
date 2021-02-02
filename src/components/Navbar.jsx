import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from 'components/icons/MenuIcon';
import ROUTES from 'constants/routes';
import '../common/nav.scss';
import img from '../assets/JNEC.svg';

const { HOME, ABOUT } = ROUTES;

const Navbar = () => {
  const [active, setActive] = useState(false);

  const Toggle = () => {
    setActive(!active);
  };

  const addClass = () => {
    let classes = 'links';
    if (active) {
      classes += ' on';
    }
    return classes;
  };
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
          <NavLink
            to="/speakrs"
            exact
            activeClassName="active"
            className="title"
          >
            SPEAKERS
          </NavLink>
          <NavLink to={ABOUT} exact activeClassName="active" className="title">
            ABOUT
          </NavLink>
          <NavLink
            to="/booking"
            exact
            activeClassName="active"
            className="title"
          >
            BOOKING
          </NavLink>
          <NavLink to="/team" exact activeClassName="active" className="title">
            TEAM
          </NavLink>
        </ul>
        <div
          role="button"
          className="menu_logo"
          onKeyDown={Toggle}
          onClick={Toggle}
          tabIndex={0}
        >
          <MenuIcon />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
