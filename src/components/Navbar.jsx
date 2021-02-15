import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CloseMenu from 'components/icons/CloseMenu';
import ROUTES from '../constants/routes';

import img from '../assets/JNEC.svg';
import MenuIcon from './icons/MenuIcon';

const { HOME, ABOUT, REGISTRATION, TEAM } = ROUTES;

const Desktop = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={img} className="logo_tedx" alt="TEDxJNEC_logo" />
        </div>
        <ul className="links">
          <NavLink to={HOME} exact activeClassName="active" className="title">
            HOME
          </NavLink>
          <NavLink to={ABOUT} exact activeClassName="active" className="title">
            ABOUT
          </NavLink>

          <NavLink to={TEAM} exact activeClassName="active" className="title">
            TEAM
          </NavLink>
          <NavLink
            to={REGISTRATION}
            exact
            activeClassName="active"
            className="title"
          >
            REGISTRATION
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

const Mobile = () => {
  const [active, setActive] = useState(false);
  const [navClass, setNavClass] = useState('mobile_menu');
  useEffect(() => {
    return () => {
      document.body.classList.remove('roll');
    };
  }, []);
  const Toggle = () => {
    setNavClass(
      active ? 'mobile_menu outanimation' : 'mobile_menu inanimation'
    );
    if (!active) {
      document.body.classList.add('roll');
    } else {
      document.body.classList.remove('roll');
    }
    setActive(!active);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <img src={img} className="logo_tedx" alt="TEDxJNEC_logo" />
        </div>

        {active ? (
          <>
            <div
              role="button"
              onKeyDown={Toggle}
              className="menu_logo"
              onClick={Toggle}
              tabIndex={0}
            >
              <CloseMenu />
            </div>
          </>
        ) : (
          <div
            role="button"
            onKeyDown={Toggle}
            className="menu_logo"
            onClick={Toggle}
            tabIndex={0}
          >
            <MenuIcon />
          </div>
        )}
        <div className={navClass}>
          <ul className="mobi_links">
            <NavLink
              to={HOME}
              exact
              activeClassName="active"
              className="mobi_title"
            >
              HOME
            </NavLink>
            <NavLink
              to={ABOUT}
              exact
              activeClassName="active"
              className="mobi_title"
            >
              ABOUT
            </NavLink>

            <NavLink
              to={TEAM}
              exact
              activeClassName="active"
              className="mobi_title"
            >
              TEAM
            </NavLink>
            <NavLink
              to={REGISTRATION}
              exact
              activeClassName="active"
              className="mobi_title"
            >
              REGISTRATION
            </NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
};

const Navbar = () => {
  const isMobile = window.screen.width < 720;
  return <>{isMobile ? <Mobile /> : <Desktop />}</>;
};

export default Navbar;
