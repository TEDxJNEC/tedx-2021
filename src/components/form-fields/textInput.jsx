import React from 'react';
import styled from 'styled-components';

import tickIconSrc from 'assets/check.svg';

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
  flex-direction: column;
  width: 100%;
  transition: 0.5s;
  margin-top: 5px;
  ${(props) => (props.error ? `border:1px solid red` : null)}
  ${(props) => (props.accepted ? `border:0.5px solid #27d760` : null)}
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
  position: relative;
  width: 100%;
`;
const ErrorMessage = styled.span`
  color: red;
  position: absolute;
`;
const CustomLabel = styled.label`
  margin-bottom: 5px;
`;
const TickIcon = styled.img`
  width: 20px;
  position: absolute;
  right: 12px;
  bottom: 12px;
`;
const TextInput = ({
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
      <CutstomTextInput
        disabled={disabled}
        error={touched[field.name] && errors[field.name]}
        accepted={touched[field.name] && !errors[field.name]}
        {...field}
        {...props}
      />
      {touched[field.name] && errors[field.name] && (
        <ErrorMessage>{errors[field.name]}</ErrorMessage>
      )}
      {touched[field.name] && !errors[field.name] && (
        <TickIcon src={tickIconSrc} />
      )}
    </InputWrapper>
  );
};

export default TextInput;
