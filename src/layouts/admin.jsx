import React from 'react';
import Navbar from '../components/dashboard/Navbar';
import '../common/admin.scss';

const AdminPageLayout = ({ children, name, onLogout }) => {
  return (
    <div className="admin-page">
      <Navbar name={name} onLogout={onLogout} />
      <div className="dashboard-wrapper">{children}</div>
    </div>
  );
};

export default AdminPageLayout;
