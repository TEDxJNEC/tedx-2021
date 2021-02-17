import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../common/ambassador-navbar.scss';

const AmbassdorNavbar = () => {
  return (
    <nav className="sidenav">
      <div className="name">Full Name</div>

      <div className="nav-links">
        <div>
          <NavLink activeClassName="active" to="/admin/dashboard">
            DASHBOARD
          </NavLink>
        </div>

        <div>
          <NavLink activeClassName="active" to="/admin/contact">
            CONTACT
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName="active" to="/admin/notifications">
            NOTIFICATIONS
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
