import AdminPageLayout from 'layouts/admin';
import React from 'react';
import AmbassadorDashboard from '../../components/ambassdor/AmbassadorNavbar';

const ambassadorDashboard = () => {
  return (
    <AdminPageLayout>
      <div>
        <AmbassadorDashboard />
      </div>
    </AdminPageLayout>
  );
};

export default ambassadorDashboard;
