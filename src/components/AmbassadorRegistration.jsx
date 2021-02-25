import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import 'common/formComponent.scss';
import styled, { keyframes, css } from 'styled-components';
import mobileSplash from 'assets/patternMobile.svg';
import CutstomTextInput from 'components/form-fields/textInput';
import API_ROUTES from 'constants/api';
import ROUTES from 'constants/routes';
import '../common/ambassadorregistration.scss';
import axios from 'axios';

const slideIn = keyframes`
from{
  transform: translateX(200px);
  opacity:0;
  }
to{
  transform: translateX(0px);
  opacity:1;
}

`;
const slideOut = keyframes`
from{
  transform: translateX(-200px);
  opacity:0;
  }
to{
  transform: translateX(0px);
opacity:1;
}

`;
const StepWrapper = styled.div`
  animation-name: ${(props) =>
    props.visible
      ? css`
          ${slideIn}
        `
      : css`
          ${slideOut}
        `};
  animation-duration: 750ms;
  animation-fill-mode: forwards;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  margin-top: 3rem;
`;
const disabledBtnStyles = `
    background: #81c784;
    cursor: no-drop;
`;
const enabledBtnStyles = `
    background: #4caf50;
    cursor: pointer;

    &:hover{
      background: #388e3c;
    }
`;

const backBtnStyles = `
    background: #ffb74d;

    &:hover{
      background: #f57c00;
    }
`;

const Button = styled.button`
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
  outline: none;
  border: none;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  transition: 500ms;
  ${(props) =>
    props.disabled
      ? css`
          ${disabledBtnStyles}
        `
      : css`
          ${enabledBtnStyles}
        `};
  ${(props) => (props.backBtn ? `display: none;` : null)};
  ${(props) =>
    props.backColor
      ? css`
          ${backBtnStyles}
        `
      : null}
`;
const StyledForm = styled(Form)``;

const AmbassadorRegistration = ({ name, email }) => {
  // const phoneRegExp = /^((+*)((0[ -]+)*|(91 )*)(d{10}+))|d{5}([- ]*)d{6}$/;
  const phoneRegExp = /^[6789]\d{9}$/;
  const emailRegExp = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;

  const [enabled, setEnabled] = useState(true);

  const [animateRight, toggleRight] = useState(true);

  const { REGISTER_AMBASSADOR_INFO } = API_ROUTES;
  const { REGISTER_SUCCESS } = ROUTES;
  const history = useHistory();

  const validateStep = (props) => {
    const { college, phone, year } = props.errors;

    if (
      !college &&
      props.touched.college &&
      !name &&
      props.touched.name &&
      !phone &&
      props.touched.phone &&
      !year
    ) {
      setEnabled(false);
      toggleRight(true);
    }
  };
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
  return (
    <div className="register-page-wrapper">
      <FormWrapper>
        <ImageWrapper>{/* <LeftImage src={splash} /> */}</ImageWrapper>
        <div className="form__place">
          <Formik
            initialValues={{
              name: name || '',
              phone: '',
              email: email || '',
              college: '',
              year: '',
            }}
            validationSchema={yup.object({
              name: yup
                .string()
                .min(2, 'Name must be at least 2 letters')
                .max(30, 'Name should be less than 30 characters')
                .required('Name is required'),
              phone: yup
                .string()
                .matches(phoneRegExp, 'Phone number is not valid')
                .required('Phone number is required'),
              email: yup
                .string()
                .matches(emailRegExp, 'Email is not valid')
                .required('Email address is required'),
              college: yup
                .string()
                .min(2, 'College Name must be at least 2 letters')
                .max(30, 'College Name should be less than 30 characters')
                .required('College Name is required'),
              year: yup.string().required('Year is required'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              const payload = {
                name: values.name,
                email: values.email,
                college: values.college,
                year: values.year,
                phoneNo: values.phone,
                aId: JSON.parse(localStorage.getItem('amb')),
              };

              const token = JSON.parse(localStorage.getItem('token'));
              axios
                .post(
                  `${process.env.REACT_APP_BACKEND_URL}/${REGISTER_AMBASSADOR_INFO}`,
                  payload,
                  {
                    headers: { token },
                  }
                )
                .then(() => history.push(REGISTER_SUCCESS))
                // eslint-disable-next-line no-console
                .catch((err) => console.log(err));
              // eslint-disable-next-line no-console
              console.log(JSON.stringify(values, null, 2));
              resetForm();
              setSubmitting(false);
            }}
            enableReinitialize
          >
            {(props) => (
              <StyledForm className="form__component">
                <StepWrapper visible={animateRight}>
                  <Field
                    name="name"
                    label="Name"
                    component={CutstomTextInput}
                    placeholder="Your Name"
                  />
                  <Field
                    name="phone"
                    label="Mobile No."
                    component={CutstomTextInput}
                    placeholder="Your Mobile Number"
                  />
                  <Field
                    name="email"
                    label="E-mail"
                    component={CutstomTextInput}
                    placeholder="Your E-mail"
                  />
                  <Field
                    name="college"
                    label="College"
                    component={CutstomTextInput}
                    placeholder="Your College Name"
                  />
                  <Field
                    name="year"
                    label="Year"
                    component={CutstomTextInput}
                    placeholder="Enter Your College Year"
                  />
                </StepWrapper>

                {validateStep(props)}
                <ButtonWrapper>
                  <Button type="submit" disabled={enabled}>
                    Submit
                  </Button>
                </ButtonWrapper>
              </StyledForm>
            )}
          </Formik>
        </div>
      </FormWrapper>
    </div>
  );
};

export default AmbassadorRegistration;
