import React from 'react';
import * as queryString from 'query-string';
import 'common/login.scss';
import { Google } from 'components/icons';
import Login from './icons/Login';

const RegLogin = () => {
  const stringifiedParams = queryString.stringify({
    client_id: process.env.REACT_APP_GOOGLE_OAUTH_ID,
    redirect_uri: process.env.REACT_APP_GOOGLE_REDIRECT_URI,
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ].join(' '), // space seperated string
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent',
  });

  const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;
  return (
    <div className="container__login_page">
      <div className="contact-wrapper">
        <div className="left_side">
          <Login />
        </div>
        <div className="right_side">
          <h2>Account Login</h2>
          <br />

          <div className="socials-wrapper">
            <h2>Login with your Social Account</h2>
            <br />
            <div className="method">
              <div className="method-item">
                <a href={googleLoginUrl} className="btn-action">
                  <Google />
                  <span>
                    <b>Sign in with Google</b>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegLogin;
