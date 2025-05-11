"use client";

import { JSX } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputCommon } from "../../common/InputCommon";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterValueProps } from "../../types/formDataTypes";
import {
  FormStyledButton,
  FormStyledContainer,
  FormStyledForm,
  FormStyledNavigate,
  FormStyledTitle,
} from "../../styles/form/FormStyled";
import { toast } from "react-toastify";
import useRouterHandler from "../../utils/useRouterHandler";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../lib/firebase/firebase";

const initialValues: RegisterValueProps = {
  // username: "",
  email: "",
  password: "",
  // confirmPassword: "",
  // phone: "",
};

const validationSchema = yup.object().shape({
  // username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  // confirmPassword: yup
  //   .string()
  //   .oneOf([yup.ref("password")], "Passwords must match")
  //   .required("Confirm Password is required"),
  // phone: yup.string().required("Phone number is required"),
});

const RegisterComponent = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterValueProps>({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<RegisterValueProps> = async (
    data: RegisterValueProps
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;

      if (user) {
        toast.success(
          "Congratulation! Eventually, you can sign up account successfully!"
        );
      }
    } catch (error: any) {
      toast.error(
        "Oops! Something went wrong when creating an account. Don't worry about it, you can try again!"
      );
    }
  };

  const { navigateTo } = useRouterHandler();

  return (
    <FormStyledContainer>
      <FormStyledTitle>Register</FormStyledTitle>
      <FormStyledForm onSubmit={handleSubmit(onSubmit)}>
        {/* <InputCommon
          id="username"
          lable="Username"
          name="username"
          placeholder="Enter your username"
          register={register}
          errorMsg={errors.username?.message}
        /> */}
        <InputCommon
          id="email"
          lable="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          register={register}
          errorMsg={errors.email?.message}
        />
        <InputCommon
          id="password"
          lable="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          register={register}
          errorMsg={errors.password?.message}
        />
        {/* <InputCommon
          id="confirmPassword"
          lable="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          register={register}
          errorMsg={errors.confirmPassword?.message}
        /> */}
        {/* <InputCommon
          id="phone"
          lable="Phone"
          name="phone"
          placeholder="Enter your phone number"
          register={register}
          errorMsg={errors.phone?.message}
        /> */}
        <FormStyledButton type="submit">Register</FormStyledButton>
        <FormStyledNavigate onClick={() => navigateTo("/login")}>
          Already have an account? Login
        </FormStyledNavigate>
      </FormStyledForm>
    </FormStyledContainer>
  );
};

export default RegisterComponent;
