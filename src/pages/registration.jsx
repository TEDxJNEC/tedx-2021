import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line import/no-cycle
import Register from '../components/Register';
import DefaultLayout from '../layouts';

const Registration = () => {
  const myRef = useRef(null);
  useEffect(() => {
    const executeScroll = () => myRef.current.scrollIntoView();
    executeScroll();
  }, []);
  return (
    <>
      <DefaultLayout>
        <div ref={myRef} className="register-page-wrapper">
          <Register />
        </div>
      </DefaultLayout>
    </>
  );
};

export default Registration;
