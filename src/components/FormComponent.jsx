import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'common/formComponent.scss';

const FormComponent = () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const emailRegExp = /^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$/;
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          email: '',
          address: '',
          age: '',
          who: '',
          clgName: '',
          profession: '',
          exp: '',
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
        {() => (
          <Form className="form__component">
            <label className="form__elements" htmlFor="name">
              Name:
              <Field name="name" type="text" placeholder="Your Name" />
              <span className="form__error">
                <ErrorMessage name="name" />
              </span>
            </label>
            <label className="form__elements" htmlFor="phone">
              Mobile Number:
              <Field
                name="phone"
                type="text"
                placeholder="Your Mobile Number"
              />
              <span className="form__error">
                <ErrorMessage name="phone" />
              </span>
            </label>
            <label className="form__elements" htmlFor="email">
              Age:
              <Field name="email" type="email" placeholder="Your Email" />
              <span className="form__error">
                <ErrorMessage name="email" />
              </span>
            </label>
            <label className="form__elements" htmlFor="age">
              Age:
              <Field name="age" type="text" placeholder="Your Age" />
              <span className="form__error">
                <ErrorMessage name="age" />
              </span>
            </label>
            <label className="form__elements" htmlFor="who">
              Who are you:
              <Field as="select" name="who">
                <option value="">Select</option>
                <option value="student">Student</option>
                <option value="notStudent">Other</option>
              </Field>
              <span className="form__error">
                <ErrorMessage name="who" />
              </span>
            </label>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormComponent;
