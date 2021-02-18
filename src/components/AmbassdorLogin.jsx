import React from 'react';
import * as queryString from 'query-string';
import CollegeAmbassdor from 'assets/CollegeAmbassdor.svg';
import img from 'assets/JNEC.svg';
import img1 from 'assets/search.svg';
import { Google } from 'components/icons';
import 'common/ambassdorlogin.scss';

const AmbassdorLogin = () => {
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
    <div className="container">
      <div className="sperator">
        <img src={CollegeAmbassdor} alt="illustration" />
      </div>
      <div>
        <div className="login-card">
          <div className="logo">
            <img src={img} className="logo_tedx" alt="TEDxJNEC_logo" />
          </div>
          <h3>Log in With</h3>
          <div className="google-logo">
            <img src={img1} alt="TEDxJNEC_logo" />
          </div>
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
  );
};

export default AmbassdorLogin;
