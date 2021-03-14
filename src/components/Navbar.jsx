import React, { useRef, useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from 'routes';
import CloseMenu from 'components/icons/CloseMenu';
import ROUTES from '../constants/routes';

import img from '../assets/JNEC.svg';
import MenuIcon from './icons/MenuIcon';

const {
  HOME,
  ABOUT,
  TEAM,
  REGISTRATION,
  STREAM,
  LOGOUT,
  AMBASSADOR_DASHBOARD,
} = ROUTES;

const Desktop = ({ state }) => {
  let interval = useRef();
  const [difference, setDifference] = useState();

  const timer = () => {
    const countDownTime = new Date('March 14, 2021 15:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownTime - now;

      if (distance < 0) {
        setDifference(distance);
        clearInterval(interval.current);
      }
    }, 1000);
  };
  useEffect(() => {
    timer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);
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
            to={difference < 0 ? STREAM : REGISTRATION}
            exact
            activeClassName="active"
            className="title"
          >
            {difference < 0 ? 'EVENT' : 'BOOK TICKETS'}
          </NavLink>
          {state.isLoggedIn && state.type === 'amb' ? (
            <NavLink
              to={AMBASSADOR_DASHBOARD}
              exact
              activeClassName="active"
              className="title"
            >
              DASHBOARD
            </NavLink>
          ) : null}
          {!state.isLoggedIn ? null : (
            <NavLink
              to={LOGOUT}
              exact
              activeClassName="active"
              className="title"
            >
              LOGOUT
            </NavLink>
          )}
        </ul>
      </nav>
    </>
  );
};

const Mobile = ({ state }) => {
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
              to={STREAM}
              exact
              activeClassName="active"
              className="title"
            >
              EVENT
            </NavLink>
            {state.isLoggedIn && state.type === 'amb' ? (
              <NavLink
                to={AMBASSADOR_DASHBOARD}
                exact
                activeClassName="active"
                className="title"
              >
                DASHBOARD
              </NavLink>
            ) : null}
            {!state.isLoggedIn ? null : (
              <NavLink
                to={LOGOUT}
                exact
                activeClassName="active"
                className="title"
              >
                LOGOUT
              </NavLink>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

const Navbar = () => {
  const { state, dispatch } = useContext(AuthContext);
  const isMobile = window.screen.width < 720;
  useEffect(() => {}, []);
  return (
    <>
      {isMobile ? (
        <Mobile state={state} dispatch={dispatch} />
      ) : (
        <Desktop state={state} dispatch={dispatch} />
      )}
    </>
  );
};

export default Navbar;
