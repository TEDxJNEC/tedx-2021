import React, { useEffect } from 'react';
import 'common/callback.scss';
import axios from 'axios';
import kintsugi from 'assets/logo.svg';
import API_ROUTES from 'constants/api';

const { REGISTER_USER } = API_ROUTES;
const GoogleAuthCallback = () => {
  const sendCodeToApi = async (code) => {
    try {
      const payload = { code };
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/${REGISTER_USER}`,
        payload
      );
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code');
    if (code) {
      const res = sendCodeToApi(code);
      console.log(res);
    }
  }, []);
  return (
    <div className="callback-page-wrapper">
      <img
        className="callback-image"
        src={kintsugi}
        alt="TEDx JNEC kintsugi logo"
      />
      <code>Loading Your info...</code>
    </div>
  );
};

export default GoogleAuthCallback;
