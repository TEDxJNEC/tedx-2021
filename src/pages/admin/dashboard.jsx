import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Registrations from '../../components/dashboard/Registrations';
import ActiveUsers from '../../components/dashboard/ActiveUsers';
import AdminPageLayout from '../../layouts/admin';
import '../../common/admin.scss';

const Dashboard = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const getUserData = async () => {
      await axios
        .get('https://api.tedxjnec.com/api/users', [])
        .then((response) => {
          setUserData(response.data);
        });
    };
    getUserData();
  }, []);
  return (
    <AdminPageLayout>
      <div className="dashboard-item">
        <Registrations />
      </div>
      <div className="dashboard-item">
        <ActiveUsers userData={userData} />
      </div>
    </AdminPageLayout>
  );
};

export default Dashboard;
