import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CutstomTextInput = styled.input`
  padding: 0.8em;
  font-size: 1em;
  border-radius: 8px;
  outline: none;
  display: flex;
  border-style: solid;
  color: white;
  background: #404040;
  border: none;
  width: 100%;
  transition: 0.5s;
  margin-top: 5px;
  ::-webkit-inner-spin-button,
  ::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
  ${(props) => (props.error ? `border:1px solid red` : null)}
  ${(props) => (props.accepted ? `border:0.5px solid #27d760` : null)}
`;

const InputWrapper = styled.div`
  margin-bottom: 25px;
  position: relative;
  width: 100%;
`;
const ErrorMessage = styled.span`
  color: red;
  position: absolute;
`;

const checkInput = ({ name, field, form: { touched, errors }, ...props }) => {
  return (
    <InputWrapper>
      <CutstomTextInput
        type="checkbox"
        error={touched[field.name] && errors[field.name]}
        accepted={touched[field.name] && !errors[field.name]}
        {...field}
        {...props}
      />
      <span>
        accept <Link to="/team">Terms of Services and Policy</Link>
      </span>
      {touched[field.name] && errors[field.name] && (
        <ErrorMessage>{`${errors[field.name]}`}</ErrorMessage>
      )}
    </InputWrapper>
  );
};

export default checkInput;
