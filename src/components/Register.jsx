/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';

// import splash from 'assets/ui.svg';
import mobileSplash from 'assets/patternMobile.svg';

import '../common/registration.scss';

import FormComponent from './FormComponent';

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

const Register = ({ user }) => {
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
