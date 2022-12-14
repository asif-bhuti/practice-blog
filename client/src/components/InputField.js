import React from "react";
import styled from "styled-components";
import { v } from "./styles/variables";

const StyledInputField = styled.input`
  display: block;
  width: 100%;
  background-color: ${({ theme }) => theme.color.foreground};
  height: 40px;
  border-radius: ${v.borderRadius};
  border: 2px solid ${({ theme }) => theme.color.background};
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
  &.field {
    height: 500px;
    text-align: start;
  }
  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.color.background};
    transition: ease-in 0.3s;
  }
`;

export const InputField = ({
  className,
  type,
  name,
  onChange,
  value,
  placeholder,
}) => {
  return (
    <StyledInputField
      className={className}
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    ></StyledInputField>
  );
};
