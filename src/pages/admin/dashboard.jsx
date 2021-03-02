import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from 'routes';
import { useHistory } from 'react-router-dom';
import API_ROUTES from 'constants/api';
import axios from 'axios';
import Registrations from '../../components/dashboard/Registrations';
import ActiveUsers from '../../components/dashboard/ActiveUsers';
import AdminPageLayout from '../../layouts/admin';
import '../../common/admin.scss';

const { GET_ADMIN_INFO } = API_ROUTES;

const Dashboard = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [adminInfo, setAdminInfo] = useState({});

  const history = useHistory();
  const LogoutUser = () => {
    dispatch({
      type: 'LOGOUT',
    });
    history.push('/');
  };

  useEffect(() => {
    const getAdminInfo = async () => {
      const { token } = state;
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/{${GET_ADMIN_INFO}}`,
        {
          headers: { token },
        }
      );
      console.log(adminInfo);
      setAdminInfo(response.data);
    };
    getAdminInfo();
  }, []);

  return (
    <AdminPageLayout name="Ayush" onLogout={LogoutUser}>
      <div className="dashboard-item">
        <Registrations />
      </div>
      <div className="dashboard-item">
        <ActiveUsers />
      </div>
    </AdminPageLayout>
  );
};

export default Dashboard;
