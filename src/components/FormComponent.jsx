import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import 'common/formComponent.scss';
import styled from 'styled-components';

import CutstomTextInput from 'components/form-fields/textInput';
import CutstomTextAreaInput from 'components/form-fields/textareaInput';
import CutstomSelectInput from 'components/form-fields/selectInput';

const StepWrapper = styled.div``;
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
  ${(props) => (props.backBtn ? `display:none` : null)}
`;

const FormComponent = () => {
  // const phoneRegExp = /^((+*)((0[ -]+)*|(91 )*)(d{10}+))|d{5}([- ]*)d{6}$/;
  const phoneRegExp = /^[6789]\d{9}$/;
  const emailRegExp = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
  const [step, setStep] = useState(1);
  const [stepError, setStpError] = useState({ 1: true, 2: true });

  const incrementStep = (p) => {
    setStep(step + 1);
    setStpError(true);
    console.log(p);
  };
  const decrementStep = () => {
    setStep(step - 1);
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          email: '',
          address: '',
          age: '',
          occupation: 'student',
          occupationDescription: '',
          know: '',
          judgingParameters: '',
          bestSkill: '',
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
            .string()
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
          // clgName: yup.string().required('Please provide your college name'),
          // profession: yup.string().required('Please provide your profession'),
          occupationDescription: yup.string().required('Please provide your '),
          judgingParameters: yup
            .string()
            .required('Required')
            .min(10, 'Please enter at least 10 letters'),
          bestSkill: yup
            .string()
            .required('Required')
            .min(10, 'Please enter at least 10 letters'),
          know: yup
            .string()
            .required('Required')
            .min(10, 'Please enter at least 10 letters'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            // eslint-disable-next-line no-console
            console.log(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 3000);
        }}
      >
        {(props) => (
          <Form className="form__component">
            {step === 1 ? (
              <StepWrapper>
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
                  name="address"
                  label="Address"
                  component={CutstomTextInput}
                  placeholder="Your Address"
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
              <StepWrapper>
                <Field
                  name="age"
                  label="DOB"
                  type="date"
                  data-date-inline-picker="true"
                  component={CutstomTextInput}
                  placeholder="Your Age"
                />
                <Field
                  name="judgingParameters"
                  label="What are your parameters to judge a good TED Talk?"
                  component={CutstomTextAreaInput}
                  placeholder="Your views"
                />
                <Field
                  name="know"
                  label="How did you come to learn about TEDxJNEC"
                  component={CutstomTextAreaInput}
                  placeholder="Your answer"
                />
                <Field
                  name="bestSkill"
                  label="What is your one best skill"
                  component={CutstomTextAreaInput}
                  placeholder="Your answer"
                />
              </StepWrapper>
            )}
            <ButtonWrapper>
              <Button
                type="button"
                disabled={stepError[1]}
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
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormComponent;
