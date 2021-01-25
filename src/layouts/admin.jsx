import React from 'react';
import Navbar from '../components/dashboard/Navbar';
import '../common/admin.scss';

const AdminPageLayout = ({ children }) => {
    return (
        <div className='admin-page'>
            <Navbar />
            <div className='wrapper'>{children}</div>
        </div>
    );
};

export default AdminPageLayout;
