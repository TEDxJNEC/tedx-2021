import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu'
const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Menu />
            <div className='page-wrapper'>{children}</div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
