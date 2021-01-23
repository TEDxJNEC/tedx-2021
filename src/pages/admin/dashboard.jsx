import React from 'react';
import Registrations from '../../components/dashboard/Registrations';
import ActiveUsers from '../../components/dashboard/ActiveUsers';
import AdminPageLayout from '../../layouts/admin';

const Dashboard = () => {
    return (
        <AdminPageLayout>
            <Registrations />
            <ActiveUsers />
        </AdminPageLayout>
    );
};

export default Dashboard;
