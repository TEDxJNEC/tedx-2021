import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../common/ambassador-navbar.scss';
import ROUTES from 'constants/routes';
import styled from 'styled-components';

const LinkLog = styled.span`
  cursor: pointer;
`;
const AmbassdorNavbar = ({ name, onLogout }) => {
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
        <LinkLog onClick={onLogout}>LOGOUT</LinkLog>
      </div>
    </nav>
  );
};

export default AmbassdorNavbar;
