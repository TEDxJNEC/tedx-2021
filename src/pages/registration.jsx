import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
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
        <Helmet>
          <title>Register for Bookings - TEDx JNEC</title>
          <meta
            name="description"
            content="TEDx JNEC 2021 is going to be a complete package including live interaction sessions with the speakers, attendee hampers and much more. What’s more interesting is that virtual events don’t have any attendee or viewer limit. Any one of you can attend and enjoy interesting and thought-provoking ideas by means of TEDx JNEC 2021"
          />
        </Helmet>
        <div ref={myRef} className="register-page-wrapper">
          <Register />
        </div>
      </DefaultLayout>
    </>
  );
};

export default Registration;
