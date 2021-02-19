import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import 'common/formComponent.scss';
import styled, { keyframes, css } from 'styled-components';

import API_ROUTES from 'constants/api';
import ROUTES from 'constants/routes';

import CutstomTextInput from 'components/form-fields/textInput';
import CustomCheckbox from 'components/form-fields/checkInput';
import CutstomTextAreaInput from 'components/form-fields/textareaInput';
import CutstomSelectInput from 'components/form-fields/selectInput';

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
  margin-top: 2rem;
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
const FormComponent = ({ name, email }) => {
  // const phoneRegExp = /^((+*)((0[ -]+)*|(91 )*)(d{10}+))|d{5}([- ]*)d{6}$/;
  const phoneRegExp = /^[6789]\d{9}$/;
  const emailRegExp = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
  const [step, setStep] = useState(1);
  const [stepError, setStpError] = useState({ 1: true, 2: true });
  const [animateRight, toggleRight] = useState(true);
  const { REGISTER_USER_INFO } = API_ROUTES;
  const { REGISTER_SUCCESS } = ROUTES;
  const history = useHistory();

  const incrementStep = () => {
    toggleRight(true);
    setStep(step + 1);
  };
  const decrementStep = () => {
    toggleRight(false);
    setStep(step - 1);
  };

  const validateStep = (props) => {
    const {
      address,
      age,
      bestSkill,
      judgingParameters,
      know,
      occupationDescription,
      phone,
    } = props.errors;

    if (step === 1) {
      if (
        !address &&
        props.touched.address &&
        !phone &&
        props.touched.phone &&
        !occupationDescription
      ) {
        if (stepError[1]) {
          setStpError({ ...step, 1: false });
        }
      } else if (!stepError[1]) {
        setStpError({ ...step, 1: true });
      }
    } else if (step === 2) {
      if (
        !age &&
        props.touched.age &&
        !judgingParameters &&
        props.touched.judgingParameters &&
        !bestSkill &&
        props.touched.bestSkill &&
        !know &&
        props.touched.know
      ) {
        if (stepError[2]) {
          setStpError({ ...step, 2: false });
        }
      } else if (!stepError[2]) {
        setStpError({ ...step, 2: true });
      }
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          name: name || '',
          phone: '',
          email: email || '',
          address: '',
          age: '',
          occupation: 'student',
          occupationDescription: '',
          know: '',
          judgingParameters: '',
          bestSkill: '',
          acceptedTerms: false,
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
          address: yup.string().required('Address is required'),
          age: yup
            .number()
            .min(8, 'You must be older than 8 years')
            .max(100, 'You must be younger than 100 years')
            .required('Please provide your age'),
          occupation: yup
            .string()
            .oneOf(
              ['student', 'notStudent'],
              'Please select one of the options'
            )
            .required('Selection is required'),
          occupationDescription: yup.string().required('Please provide your '),
          judgingParameters: yup
            .string()
            .required('Required')
            .min(10, 'Please enter at least 10 letters'),
          bestSkill: yup
            .string()
            .required('Required')
            .min(2, 'Please enter at least 2 letters'),
          know: yup
            .string()
            .required('Required')
            .min(10, 'Please enter at least 10 letters'),
          acceptedTerms: yup
            .boolean()
            .required('Required')
            .oneOf([true], 'Required'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const payload = {
            email: values.email,
            name: values.name,
            address: values.address,
            phoneNo: values.phone,
            age: values.age,
            occupation: values.occupation,
            occupationDescription: values.occupationDescription,
            judgingParameters: values.judgingParameters,
            medium: values.know,
            bestSkill: values.bestSkill,
            aid: localStorage.getItem('aid'),
          };
          // https://erp.mgmu.ac.in/asd_EventPublicUserMaster.htm?eventID=11
          axios
            .post(REGISTER_USER_INFO, payload)
            .then(() => history.push(REGISTER_SUCCESS))
            // eslint-disable-next-line no-console
            .catch((err) => console.log(err));
          // eslint-disable-next-line no-console
          console.log(JSON.stringify(payload, null, 2));
          resetForm();
          setSubmitting(false);
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
                  disabled
                  component={CutstomTextInput}
                  placeholder="Your Name"
                />
                <Field
                  name="phone"
                  label="Mobile No."
                  component={CutstomTextInput}
                  placeholder="Whatsapp Number"
                />
                <Field
                  name="email"
                  label="E-mail"
                  disabled
                  component={CutstomTextInput}
                  placeholder="Your E-mail"
                />
                <Field
                  name="address"
                  label="Address"
                  component={CutstomTextAreaInput}
                  placeholder="PLot/Flat No,&#10;Locality/Area/Nearby Places,&#10;City, State."
                />
                <Field
                  name="occupation"
                  label="Occupation"
                  component={CutstomSelectInput}
                  placeholder="Enter Profession"
                />
                {props.values.occupation === 'student' ? (
                  <Field
                    name="occupationDescription"
                    label="College Name"
                    errorSuffix="College Name"
                    component={CutstomTextInput}
                    placeholder="Your College Name"
                  />
                ) : (
                  <Field
                    name="occupationDescription"
                    label="Profession"
                    errorSuffix="Profession"
                    component={CutstomTextInput}
                    placeholder="Your Profession"
                  />
                )}
              </StepWrapper>
            ) : (
              <StepWrapper key="step2" visible={animateRight}>
                <Field
                  name="age"
                  label="Age"
                  component={CutstomTextInput}
                  placeholder="Your Age"
                />
                <Field
                  name="judgingParameters"
                  label="What are your views on a good TED Talk?"
                  component={CutstomTextAreaInput}
                  placeholder="Your views"
                />
                <Field
                  name="know"
                  label="How did you come to know about TEDxJNEC 2021"
                  component={CutstomTextAreaInput}
                  placeholder="For eg. Social Media/ Friend/ Advertisement/ Campus Ambassador/ Other"
                />
                <Field
                  name="bestSkill"
                  label="What is your one best skill"
                  component={CutstomTextInput}
                  placeholder="Your answer"
                />
                <Field name="acceptedTerms" component={CustomCheckbox} />
              </StepWrapper>
            )}
            {validateStep(props)}
            <ButtonWrapper>
              {step === 2 ? (
                <Button type="submit" disabled={stepError[step]}>
                  {props.isSubmitting ? 'Redirecting...' : 'Submit'}
                </Button>
              ) : (
                <Button
                  type="button"
                  disabled={stepError[step]}
                  onClick={() => incrementStep()}
                >
                  Next
                </Button>
              )}
              <Button
                type="button"
                backBtn={step === 1}
                backColor
                onClick={decrementStep}
              >
                Back
              </Button>
            </ButtonWrapper>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default FormComponent;
