import React, { useEffect, useContext } from 'react';
import 'common/callback.scss';
import axios from 'axios';
import kintsugi from 'assets/logo.svg';
import API_ROUTES from 'constants/api';
import ROUTES from 'constants/routes';
// eslint-disable-next-line import/no-cycle
import { AuthContext } from 'routes';
import { Redirect } from 'react-router-dom';

const { REGISTER_USER } = API_ROUTES;
const { REGISTRATION, AMBASSADOR_DASHBOARD } = ROUTES;
const GoogleAuthCallback = () => {
  const { state, dispatch } = useContext(AuthContext);
  const sendCodeToApi = async (code) => {
    try {
      const { type } = state;
      const payload = { code, type };

      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/${REGISTER_USER}`,
        payload
      );

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
      try {
        const res = await sendCodeToApi(code);
        if (res.token) {
          dispatch({
            type: 'LOGIN',
            payload: { user: res.user, token: res.token, isLoggedIn: true },
          });
        } else {
          dispatch({
            type: 'LOGOUT',
          });
        }
      } catch (error) {
        dispatch({
          type: 'LOGOUT',
        });
      }
    } else {
      dispatch({
        type: 'LOGOUT',
      });
    }
  }, []);
  if (state.token) {
    // send to Book page after its made [TODO]
    setTimeout(() => {
      return (
        <Redirect
          to={state.type === 'amb' ? AMBASSADOR_DASHBOARD : REGISTRATION}
        />
      );
    }, 1200);
  }
  return (
    <div className="callback-page-wrapper">
      <img
        className="callback-image"
        src={kintsugi}
        alt="TEDx JNEC kintsugi logo"
      />
      <code>Loading Your info...</code>
      <code>
        {state.token ? (
          <Redirect
            to={state.type === 'amb' ? AMBASSADOR_DASHBOARD : REGISTRATION}
          />
        ) : null}
      </code>
    </div>
  );
};

export default GoogleAuthCallback;
