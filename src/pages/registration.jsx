/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

// eslint-disable-next-line import/no-cycle
import { AuthContext } from 'routes';
import API_ROUTES from 'constants/api';

import { useHistory } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import Register from '../components/Register';
import DefaultLayout from '../layouts';

const { GET_USER_INFO } = API_ROUTES;
const Registration = ({ propState }) => {
  const myRef = useRef(null);
  const history = useHistory();
  const { state, dispatch } = useContext(AuthContext);
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
      history.push('/login');
      return {};
    }
  };
  useEffect(async () => {
    if (state.token) {
      const executeScroll = () => myRef.current.scrollIntoView();

      const userData = await getUserInfo();
      setUser({
        email: userData.email,
        name: userData.name,
      });
      executeScroll();
    } else {
      dispatch({
        type: 'LOGOUT',
      });
      history.push('/login');
    }
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
        <div ref={myRef} className="register-page-wrapper">
          <Register user={user} />
        </div>
      </DefaultLayout>
    </>
  );
};

export default Registration;
