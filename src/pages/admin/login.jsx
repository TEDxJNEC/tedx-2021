import React from 'react';
// import styled from 'styled-components';
import DefaultLayout from '../../layouts';
import AdminLogin from '../../components/dashboard/AdminLogin';

const Login = () => {
  return (
    <>
      <DefaultLayout>
        <AdminLogin />
      </DefaultLayout>
    </>
  );
};

export default Login;
