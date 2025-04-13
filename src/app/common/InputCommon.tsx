"use client";

import { JSX, useState } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import {
  InputCommonContainer,
  InputCommonError,
  InputCommonInput,
  InputCommonLabel,
  InputWrapper,
  PasswordVisibilityToggle,
} from "../styles/form/FormStyled";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type InputCommonValueProps<T extends FieldValues> = {
  id: string;
  lable: string;
  type?: React.HTMLInputTypeAttribute;
  name: Path<T>;
  placeholder?: string;
  value?: string;
  errorMsg?: string;
  register: UseFormRegister<T>;
};

export const InputCommon = <T extends Record<string, string>>(
  props: InputCommonValueProps<T>
): JSX.Element => {
  const {
    id,
    lable,
    type = "text",
    name,
    placeholder,
    value,
    errorMsg,
    register,
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputCommonContainer>
      <InputCommonLabel htmlFor={id}>{lable}</InputCommonLabel>
      <InputWrapper>
        <InputCommonInput
          id={id}
          type={showPassword && type == "password" ? "text" : type}
          autoComplete="off"
          placeholder={placeholder}
          //khi dùng react-hook-form thì không cần value và onChange
          defaultValue={value}
          {...register(name)}
        />

        {type === "password" && (
          <PasswordVisibilityToggle onClick={togglePasswordVisibility}>
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </PasswordVisibilityToggle>
        )}
      </InputWrapper>

      {errorMsg && <InputCommonError>{errorMsg}</InputCommonError>}
    </InputCommonContainer>
  );
};
