import React from 'react';
import styled from 'styled-components';

const CutstomTextAreaInput = styled.textarea`
  padding: 0.8em;
  font-size: 1em;
  border-radius: 8px;
  outline: none;
  display: flex;
  border-style: solid;
  color: white;
  background: #404040;
  border: none;
  resize: none;
  width: 100%;
  transition: 0.5s;
  margin-top: 5px;
  ${(props) => (props.error ? `border:1px solid red` : null)}
  ${(props) => (props.accepted ? `border:0.5px solid #27d760` : null)}
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;

  width: 100%;
`;
const ErrorMessage = styled.span`
  color: red;
  position: absolute;
`;
const CustomLabel = styled.label`
  margin-bottom: 5px;
`;

const textareaInput = ({
  name,
  field,
  form: { touched, errors },
  label,
  disabled,
  ...props
}) => {
  return (
    <InputWrapper>
      <CustomLabel htmlFor={name}>{label}</CustomLabel>
      <CutstomTextAreaInput
        disabled={disabled}
        rows="3"
        maxLength="200"
        error={touched[field.name] && errors[field.name]}
        accepted={touched[field.name] && !errors[field.name]}
        {...field}
        {...props}
      />
      {touched[field.name] && errors[field.name] && (
        <ErrorMessage>{errors[field.name]}</ErrorMessage>
      )}
    </InputWrapper>
  );
};

export default textareaInput;
