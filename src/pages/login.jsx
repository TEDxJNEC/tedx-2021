import React, { useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from 'routes';
import Login from 'components/Login';
import DefaultLayout from '../layouts';

import '../common/login.scss';

function RegLogin() {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(AuthContext);
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const aId = urlParams.get('aid');
    dispatch({
      type: 'LOGOUT',
    });
    if (aId) {
      dispatch({
        type: 'SETAMB',
        payload: {
          amb: aId,
        },
      });
    }
    dispatch({
      type: 'SETTYPE',
      payload: {
        type: 'attendee',
      },
    });
  }, []);
  return (
    <DefaultLayout>
      <Helmet>
        <title>Login - TEDx JNEC</title>
        <meta
          name="description"
          content="TEDxJNEC is all about sparking conversations and making great ideas accessible. We believe passion is contagious, and wish to spread our speaker’s commitment to innovation thus creating a unique space where we expand our Perceptions.
"
        />
      </Helmet>
      <Login />
    </DefaultLayout>
  );
}

export default RegLogin;
