/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

// eslint-disable-next-line import/no-cycle
import { AuthContext } from 'routes';
import API_ROUTES from 'constants/api';
// import splash from 'assets/ui.svg';
import mobileSplash from 'assets/patternMobile.svg';

import '../common/registration.scss';

import FormComponent from './FormComponent';

const { GET_USER_INFO } = API_ROUTES;
const FormWrapper = styled.div`
  display: flex;
  width: calc(100% - 1em);
  background: #353535;
  border-radius: 25px;
  @media only screen and (min-width: 768px) {
    width: 1200px;
    height: 720px;
  }
  @media only screen and (max-width: 768px) {
    margin: 1em;
    flex-direction: column;
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  background: url(${mobileSplash});
  background-size: cover;
  height: 180px;
  border-radius: 25px 25px 0 0;
  @media only screen and (min-width: 768px) {
    width: 50%;
    background: url(${mobileSplash});
    height: 100%;
    background-repeat: none;
    border-radius: 25px 0 0 25px;
  }
`;

const Register = () => {
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
      console.log(token);
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/${GET_USER_INFO}`,
        {
          headers: { token },
        }
      );
      return data;
    } catch (error) {
      // dispatch({
      //   type: 'LOGOUT',
      // });
      // history.push('/login');
      console.log(error);
      return {};
    }
  };
  useEffect(async () => {
    const userData = await getUserInfo();
    setUser({
      email: userData.email,
      name: userData.name,
    });
  }, []);
  return (
    <FormWrapper>
      <ImageWrapper>{/* <LeftImage src={splash} /> */}</ImageWrapper>

      <div className="form__place">
        <FormComponent name={user.name} email={user.email} />
      </div>
    </FormWrapper>
  );
};

export default Register;
