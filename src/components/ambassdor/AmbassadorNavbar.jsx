import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../common/ambassador-navbar.scss';
import ROUTES from 'constants/routes';

const AmbassdorNavbar = ({ name }) => {
  return (
    <nav className="amb-sidenav">
      <div className="name">{name}</div>

      <div className="nav-links">
        <div>
          <NavLink activeClassName="active" to={ROUTES.AMBASSADOR_DASHBOARD}>
            DASHBOARD
          </NavLink>
        </div>
      </div>
      <div className="logout">
        <Link to="/">LOGOUT</Link>
      </div>
    </nav>
  );
};

export default AmbassdorNavbar;
