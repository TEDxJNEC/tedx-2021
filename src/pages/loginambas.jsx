import React, { useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from 'routes';
import Login from 'components/AmbassdorLogin';
import DefaultLayout from '../layouts';

function RegLogin() {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useContext(AuthContext);
  useEffect(() => {
    dispatch({
      type: 'LOGOUT',
    });
    dispatch({
      type: 'SETTYPE',
      payload: {
        type: 'amb',
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
