import React from 'react';
import Navbar from '../components/dashboard/Navbar';

const AdminPageLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div>{children}</div>
        </div>
    );
};

export default AdminPageLayout;
