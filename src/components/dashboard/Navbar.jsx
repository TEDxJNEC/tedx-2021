import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../common/admin-navbar.scss';

const Navbar = () => {
    return (
        <nav className='sidenav'>
            <div className='name'>Full Name</div>

            <div className='nav-links'>
                <div>
                    <NavLink activeClassName='active' to='/admin/dashboard'>
                        DASHBOARD
                    </NavLink>
                </div>
                <div>
                    <NavLink activeClassName='active' to='/admin/chat'>
                        CHAT
                    </NavLink>
                </div>
                <div>
                    <NavLink activeClassName='active' to='/admin/contact'>
                        CONTACT
                    </NavLink>
                </div>
                <div>
                    <NavLink activeClassName='active' to='/admin/notifications'>
                        NOTIFICATIONS
                    </NavLink>
                </div>
                <div>
                    <NavLink activeClassName='active' to='/admin/calendar'>
                        CALENDAR
                    </NavLink>
                </div>
                <div>
                    <NavLink activeClassName='active' to='/admin/settings'>
                        SETTINGS
                    </NavLink>
                </div>
            </div>
            <div className='logout'>
                <Link to='/'>LOGOUT</Link>
            </div>
        </nav>
    );
};

export default Navbar;
