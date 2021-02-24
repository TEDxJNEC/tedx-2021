import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CutstomCheckInput = styled.input`
  margin: 0 0.8em 0 0;
  font-size: 1em;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 8px;
  outline: none;
  display: flex;
  transition: 0.5s;
  :checked {
    border: 2px solid #27d760;
    background-color: #27d760 !important;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const ErrorMessage = styled.span`
  color: red;
  position: absolute;
  bottom: -40%;
`;

const CustomLink = styled(Link)`
  color: #fff;
  text-decoration: underline;
`;

const checkInput = ({ name, field, form: { touched, errors }, ...props }) => {
  return (
    <InputWrapper>
      <ContentWrapper>
        <CutstomCheckInput
          type="checkbox"
          error={touched[field.name] && errors[field.name]}
          accepted={touched[field.name] && !errors[field.name]}
          {...field}
          {...props}
        />
        <span>
          Accept{' '}
          <CustomLink to="/tns" target="_blank">
            Terms and Conditions
          </CustomLink>{' '}
          and{' '}
          <CustomLink to="/policy" target="_blank">
            Privacy Policy
          </CustomLink>
        </span>
      </ContentWrapper>
      {touched[field.name] && errors[field.name] && (
        <ErrorMessage>{`${errors[field.name]}`}</ErrorMessage>
      )}
    </InputWrapper>
  );
};

export default checkInput;
