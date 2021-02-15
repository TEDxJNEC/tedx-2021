import React from 'react';
import { Helmet } from 'react-helmet';
import Login from 'components/Login';
import DefaultLayout from '../layouts';
import '../common/login.scss';

function RegLogin() {
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
