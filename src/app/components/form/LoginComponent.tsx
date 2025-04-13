"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { InputCommon } from "../../common/InputCommon";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { JSX } from "react";
import { LoginValueProps } from "../../types/formDataTypes";
import {
  FormStyledButton,
  FormStyledContainer,
  FormStyledForm,
  FormStyledNavigate,
  FormStyledTitle,
  CloseButton,
} from "../../styles/form/FormStyled";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../lib/firebase/firebase";
import useRouterHandler from "../../utils/useRouterHandler";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { closeLoginForm } from "@/app/redux/ui/uiSlice";
import { useAppDispatch } from "@/app/hooks/hooks";

const LoginComponent = (): JSX.Element => {

  const provider = new GoogleAuthProvider();
  const { navigateTo } = useRouterHandler();

  const initialValues: LoginValueProps = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValueProps>({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<LoginValueProps> = async (
    data: LoginValueProps
  ) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;
      if (user) {
        //show toast notification
        toast.success("Congratulation! You login successfully!");
        navigateTo("/");
      }
    } catch (error: any) {
      toast.error("Oops! Something went wrong");
      throw Error("Error: ", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      if (user) {
        toast.success("Congratulation! You login successfully!");
        navigateTo("/");
      }
    } catch (error: any) {
      toast.error("Oops! Something went wrong");
      throw Error("Error: ", error);
    }
  };

  const dispatch = useAppDispatch();

  const closeLogin = () => {
    dispatch(closeLoginForm());
  };

  return (
    <FormStyledContainer>
      <FormStyledTitle>Sign In</FormStyledTitle>
      <CloseButton onClick={closeLogin} />
      <FormStyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputCommon<LoginValueProps>
          id="email"
          lable="Email"
          name="email"
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
        <FormStyledButton type="submit">Login</FormStyledButton>
        <FormStyledButton type="button" onClick={handleGoogleLogin}>
          <FaGoogle /> Login with Google
        </FormStyledButton>
        <FormStyledNavigate onClick={() => navigateTo("/login-otp")}>
          Login with Phone Number OTP
        </FormStyledNavigate>
        <FormStyledNavigate onClick={() => navigateTo("/register")}>
          Don't have an account? Register here
        </FormStyledNavigate>
      </FormStyledForm>
    </FormStyledContainer>
  );
};

export default LoginComponent;


