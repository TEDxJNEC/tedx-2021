import React from 'react';
import Registrations from '../../components/dashboard/Registrations';
import ActiveUsers from '../../components/dashboard/ActiveUsers';
import AdminPageLayout from '../../layouts/admin';
import '../../common/admin.scss';

const Dashboard = () => {
    return (
        <AdminPageLayout>
            <div className='dashboard-item'>
                <Registrations />
            </div>
            <div className='dashboard-item'>
                <ActiveUsers />
            </div>
        </AdminPageLayout>
    );
};

export default Dashboard;
