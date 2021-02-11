import React from 'react';
import Register from '../components/Register';
import DefaultLayout from '../layouts';

const Registration = () => {
  return (
    <>
      <DefaultLayout>
        <div className="register-page-wrapper">
          <Register />
        </div>
      </DefaultLayout>
    </>
  );
};

export default Registration;
