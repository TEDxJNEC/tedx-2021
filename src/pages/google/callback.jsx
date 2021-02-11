import React, { useEffect, useContext } from 'react';
import 'common/callback.scss';
import axios from 'axios';
import kintsugi from 'assets/logo.svg';
import API_ROUTES from 'constants/api';
// eslint-disable-next-line import/no-cycle
import { AuthContext } from 'routes';
import { Redirect } from 'react-router-dom';

const { REGISTER_USER } = API_ROUTES;
const GoogleAuthCallback = () => {
  const { state, dispatch } = useContext(AuthContext);
  const sendCodeToApi = async (code) => {
    try {
      const payload = { code };
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/${REGISTER_USER}`,
        payload
      );
      // eslint-disable-next-line no-debugger
      debugger;
      return data;
    } catch (error) {
      // console.log(error);
      return error;
    }
  };
  useEffect(async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code');
    if (code) {
      const res = await sendCodeToApi(code);
      dispatch({
        type: 'LOGIN',
        payload: { user: res.user, token: res.token, isLoggedIn: true },
      });
    } else {
      dispatch({
        type: 'LOGOUT',
      });
    }
  }, []);
  if (state.isLoggedIn) {
    // send to Book page after its made [TODO]
    return <Redirect to="/test" />;
  }
  return (
    <div className="callback-page-wrapper">
      <img
        className="callback-image"
        src={kintsugi}
        alt="TEDx JNEC kintsugi logo"
      />
      <code>Loading Your info...</code>
      <code>{state.isLoggedIn}</code>
    </div>
  );
};

export default GoogleAuthCallback;
