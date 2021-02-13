import React from 'react';
// eslint-disable-next-line import/no-cycle
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
