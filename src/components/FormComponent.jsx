import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import 'common/formComponent.scss';

import CutstomTextInput from 'components/form-fields/textInput';
import CutstomSelectInput from 'components/form-fields/selectInput';

const FormComponent = ({ name, email }) => {
  const phoneRegExp = /^[6789]\d{9}$/;
  const emailRegExp = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;

  return (
    <>
      <Formik
        initialValues={{
          name: name || '',
          phone: '',
          email: email || '',
          address: '',
          age: '',
          who: '',
          clgName: '',
          profession: '',
          exp: '',
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
            .number()
            .min(8, 'You must be older than 8 years')
            .max(100, 'You must be younger than 100 years')
            .required('Please provide your age'),
          who: yup
            .string()
            .oneOf(
              ['student', 'notStudent'],
              'Please select one of the options'
            )
            .required('Selection is required'),
          clgName: yup.string().required('Please provide your college name'),
          profession: yup.string().required('Please provide your profession'),
          bestSkill: yup
            .string()
            .required('Please provide your one best skill'),
          know: yup
            .string()
            .required('Please tell how did you learn about TEDxJNEC'),
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
          <Form className="form__component">
            <Field
              name="name"
              label="Name"
              disabled
              component={CutstomTextInput}
              placeholder="Your Name"
            />
            <Field
              name="email"
              label="E-mail"
              disabled
              component={CutstomTextInput}
              placeholder="Your E-mail"
            />
            <Field
              name="phone"
              label="Mobile No."
              component={CutstomTextInput}
              placeholder="Your Mobile Number"
            />

            <Field
              name="age"
              label="Age"
              component={CutstomTextInput}
              placeholder="Your Age"
            />
            <Field
              name="who"
              label="Who are you"
              component={CutstomSelectInput}
              placeholder="Enter Profession"
            />
            {props.values.who === 'student' ? (
              <p>This is rendered if you pick student</p>
            ) : null}
            {props.values.who === 'notStudent' ? (
              <p>This is rendered if you pick other</p>
            ) : null}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormComponent;
