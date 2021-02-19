import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import 'common/formComponent.scss';
import styled, { keyframes, css } from 'styled-components';
import mobileSplash from 'assets/patternMobile.svg';
import CutstomTextInput from 'components/form-fields/textInput';

import '../common/ambassadorregistration.scss';

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
const Button = styled.button`
  background: transparent;
  outline: none;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: 1000ms;
  ${(props) => (props.backBtn ? `display:none` : null)}
`;
const StyledForm = styled(Form)``;

const AmbassadorRegistration = ({ name, email }) => {
  // const phoneRegExp = /^((+*)((0[ -]+)*|(91 )*)(d{10}+))|d{5}([- ]*)d{6}$/;
  const phoneRegExp = /^[6789]\d{9}$/;
  const nameRegExp = /^[A-Za-z]+$/;
  const emailRegExp = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
  const [step, setStep] = useState(1);
  const [stepError, setStpError] = useState({ 1: true, 2: true });

  const [animateRight, toggleRight] = useState(true);
  const incrementStep = () => {
    toggleRight(true);
    setStep(step + 1);
  };
  const decrementStep = () => {
    toggleRight(false);
    setStep(step - 1);
  };

  const validateStep = (props) => {
    const { college, phone, year } = props.errors;

    if (step === 1) {
      if (
        !college &&
        props.touched.college &&
        !name &&
        props.touched.name &&
        !phone &&
        props.touched.phone &&
        !year &&
        props.touched.year
      ) {
        if (stepError[1]) {
          setStpError({ ...step, 1: false });
        }
      } else if (!stepError[1]) {
        setStpError({ ...step, 1: true });
      }
    } else if (step === 2) {
      // if (
      //   !age &&
      //   props.touched.age &&
      //   !judgingParameters &&
      //   props.touched.judgingParameters &&
      //   !bestSkill &&
      //   props.touched.bestSkill &&
      //   !know &&
      //   props.touched.know
      // ) {
      //   if (stepError[2]) {
      //     setStpError({ ...step, 2: false });
      //   }
      // } else if (!stepError[2]) {
      //   setStpError({ ...step, 2: true });
      // }
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
    <>
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
                .matches(nameRegExp, 'Name should not be include number')
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
                .matches(
                  nameRegExp,
                  'College Name should not be include number'
                )
                .max(30, 'College Name should be less than 30 characters')
                .required('College Name is required'),
              year: yup.string().required('Year is required'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                // eslint-disable-next-line no-console
                console.log(JSON.stringify(values, null, 2));
                resetForm();
                setSubmitting(false);
              }, 3000);
            }}
            enableReinitialize
          >
            {(props) => (
              <StyledForm className="form__component">
                {step === 1 ? (
                  <StepWrapper key="step1" visible={animateRight}>
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
                      placeholder="Enter your Year"
                    />
                  </StepWrapper>
                ) : null}
                {validateStep(props)}
                <ButtonWrapper>
                  <Button
                    type="button"
                    disabled={stepError[step]}
                    onClick={() => incrementStep()}
                  >
                    Next
                  </Button>
                  <Button
                    type="button"
                    backBtn={step === 1}
                    onClick={decrementStep}
                  >
                    Back
                  </Button>
                </ButtonWrapper>
              </StyledForm>
            )}
          </Formik>
        </div>
      </FormWrapper>
    </>
  );
};

export default AmbassadorRegistration;
