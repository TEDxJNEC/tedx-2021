import React from 'react';
import CollegeAmbassdor from 'assets/CollegeAmbassdor.svg';
import img from 'assets/JNEC.svg';
import img1 from 'assets/search.svg';
import img2 from 'assets/google_logo.svg';
import 'common/ambassdorlogin.scss';

const AmbassdorLogin = () => {
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
          <h1>Welcome Back!!!</h1>
          <h3>Log in With</h3>
          <div className="google-logo">
            <img src={img1} alt="TEDxJNEC_logo" />
          </div>
          <button type="submit">
            <img src={img2} alt="TEDxJNEC_logo" />
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmbassdorLogin;
