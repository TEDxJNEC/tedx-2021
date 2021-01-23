import React from 'react';
import { Link } from 'react-router-dom';
import '../../common/admin-navbar.scss';

const Navbar = () => {
    return (
        <nav className='sidenav'>
            <div className='name'>Full Name</div>

            <div className='nav-links'>
                <div>
                    <i />
                    <Link to='/admin/dashboard'>DASHBOARD</Link>
                </div>
                <div>
                    <i />
                    <Link to='/admin/dashboard'>CHAT</Link>
                </div>
                <div>
                    <i />
                    <Link to='/admin/dashboard'>CONTACT</Link>
                </div>
                <div>
                    <i />
                    <Link to='/admin/dashboard'>NOTIFICATIONS</Link>
                </div>
                <div>
                    <i />
                    <Link to='/admin/dashboard'>CALENDAR</Link>
                </div>
                <div>
                    <i />
                    <Link to='/admin/dashboard'>SETTINGS</Link>
                </div>
            </div>
            <div className='logout'>
                <i />
                <Link to='/'>LOGOUT</Link>
            </div>
        </nav>
    );
};

export default Navbar;
