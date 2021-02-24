/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import { AuthContext } from 'routes';
import API_ROUTES from 'constants/api';
import ROUTES from 'constants/routes';

import { useHistory } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import Register from 'components/Register';
import DefaultLayout from 'layouts';

const LoaderMask = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: #000000bb;
  width: 100vw;
  height: 100vh;
  z-index: 5000;
`;
const { GET_USER_INFO } = API_ROUTES;
const { REGISTER_SUCCESS, LOGIN, PAYMENT_SUCCESS } = ROUTES;
const Registration = ({ propState }) => {
  const myRef = useRef(null);
  const history = useHistory();
  const { state, dispatch } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    name: '',
    email: '',
  });
  const getUserInfo = async () => {
    try {
      let { token } = state;
      if (!token) {
        token = localStorage.getItem('token');
      }
      if (!token) {
        token = propState;
      }

      const resp = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/${GET_USER_INFO}`,
        {
          headers: { token },
        }
      );
      return resp.data;
    } catch (error) {
      dispatch({
        type: 'LOGOUT',
      });
      history.push(LOGIN);
      return {};
    }
  };
  useEffect(async () => {
    setLoading(true);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const aId = urlParams.get('aid');

    if (aId) {
      dispatch({
        type: 'SETAMB',
        payload: {
          amb: aId,
        },
      });
    }
    if (state.token) {
      const userData = await getUserInfo();
      setUser({
        email: userData.email,
        name: userData.name,
      });
      if (userData.phoneNo && userData.ticketsBought) {
        history.push(PAYMENT_SUCCESS);
      } else if (userData.phoneNo) {
        history.push(REGISTER_SUCCESS);
      }

      if (myRef.current) {
        const executeScroll = () => myRef.current.scrollIntoView();
        executeScroll();
      }
    } else {
      dispatch({
        type: 'LOGOUT',
      });
      history.push(LOGIN);
    }
    setLoading(false);
  }, [state]);

  return (
    <>
      <DefaultLayout>
        <Helmet>
          <title>Register for Bookings - TEDx JNEC</title>
          <meta
            name="description"
            content="TEDx JNEC 2021 is going to be a complete package including live interaction sessions with the speakers, attendee hampers and much more. What’s more interesting is that virtual events don’t have any attendee or viewer limit. Any one of you can attend and enjoy interesting and thought-provoking ideas by means of TEDx JNEC 2021"
          />
        </Helmet>
        {loading ? <LoaderMask /> : null}
        <div ref={myRef} className="register-page-wrapper">
          <Register user={user} />
        </div>
      </DefaultLayout>
    </>
  );
};

export default Registration;
