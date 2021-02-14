import React from 'react';
import styled from 'styled-components';

const CutstomSelectInput = styled.select`
  padding: 0.8em;
  font-size: 1em;
  border-radius: 8px;
  outline: none;
  display: flex;
  flex-direction: column;
  background: #404040;
  color: white;
  border: none;
  width: 100%;
  margin-top: 5px;
  transition: 0.5s;
  position: relative;
  ${(props) => (props.error ? `border:1px solid red` : null)}
  option {
    color: white;
    background: #454545;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;
const ErrorMessage = styled.span`
  color: red;
`;
const CustomLabel = styled.label`
  margin-bottom: 5px;
  font-weight: 500;
`;
const SelectInput = ({
  name,
  field,
  form: { touched, errors },
  label,
  ...props
}) => {
  return (
    <InputWrapper>
      <CustomLabel htmlFor={name}>{label}</CustomLabel>
      <CutstomSelectInput
        error={touched[field.name] && errors[field.name]}
        {...field}
        {...props}
      >
        <option value="">Select</option>
        <option value="student">Student</option>
        <option value="notStudent">Other</option>
      </CutstomSelectInput>
      {touched[field.name] && errors[field.name] && (
        <ErrorMessage>{errors[field.name]}</ErrorMessage>
      )}
    </InputWrapper>
  );
};

export default SelectInput;
