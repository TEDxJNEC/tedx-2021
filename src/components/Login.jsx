import React from 'react';
import 'common/login.scss';
import { Google } from 'components/icons';
import Login from './icons/Login';

const RegLogin = () => {
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
                <a href="www.google.com" className="btn-action">
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
