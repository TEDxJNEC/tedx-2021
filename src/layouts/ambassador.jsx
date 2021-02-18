import React from 'react';
import Navbar from '../components/ambassdor/AmbassadorNavbar';
import '../common/admin.scss';

const AmbassdorPageLayout = ({ children }) => {
  return (
    <div className="admin-page">
      <Navbar />
      <div className="dashboard-wrapper">{children}</div>
    </div>
  );
};

export default AmbassdorPageLayout;
