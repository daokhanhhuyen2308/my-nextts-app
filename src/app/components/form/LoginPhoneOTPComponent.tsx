"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { JSX, useState } from "react";
import {
  ConfirmationResultValueProps,
  LoginValuePropsWithPhoneNumberOTP,
} from "../../types/formDataTypes";
import {
  FormStyledButton,
  FormStyledContainer,
  FormStyledForm,
  FormStyledNavigate,
  FormStyledTitle,
  CloseButton,
  LoginPhoneInput,
  InputCommonError,
} from "../../styles/form/FormStyled";
import { toast } from "react-toastify";
import useRouterHandler from "../../utils/useRouterHandler";
import { setupRecaptcha } from "../../../../lib/firebase/setupRecaptcha";
import { ConfirmationResult, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../../../lib/firebase/firebase";
import { InputCommon } from "../../common/InputCommon";

const LoginPhoneOTPComponent = (): JSX.Element => {
  const [isPhoneLogin, setIsPhoneLogin] = useState<boolean>(false);
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult>();
  const [isOTPSent, setIsOTPSent] = useState<boolean>(false);

  const { navigateTo } = useRouterHandler();

  const handleChangeToLogin = () => {
    setIsPhoneLogin(!isPhoneLogin);
  };

  const initialValues: LoginValuePropsWithPhoneNumberOTP = {
    phone: "",
  };

  const validationSchemaPhone = yup.object().shape({
    phone: yup
      .string()
      .required("Phone number is required")
      .test("is-valid-phone", "Phone must be 10 digits", (value) => {
        const digitsOnly = value.replace(/\D/g, "");
        const phoneWithoutPrefix = digitsOnly.startsWith("84")
          ? digitsOnly.slice(2)
          : digitsOnly;
        return (
          phoneWithoutPrefix.length === 9 || phoneWithoutPrefix.length === 10
        );
      }),
  });

  const validationSchemaOTP = yup.object().shape({
    verificationOTP: yup
      .string()
      .length(6, "OTP must be 6 digits")
      .required("OTP is required"),
  });

  const {
    control: controlPhone,
    handleSubmit: handleSubmitPhone,
    formState: { errors: errorsPhone },
  } = useForm<LoginValuePropsWithPhoneNumberOTP>({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchemaPhone),
  });

  const {
    register: registerOTP,
    handleSubmit: handleSubmitOTP,
    formState: { errors: errorsOTP },
  } = useForm<ConfirmationResultValueProps>({
    defaultValues: { verificationOTP: "" },
    resolver: yupResolver(validationSchemaOTP),
  });

  const [showLogin, setShowLogin] = useState(true);

  const closeLoginForm = () => {
    setShowLogin(!showLogin);
  };

  const handleSendOTP: SubmitHandler<
    LoginValuePropsWithPhoneNumberOTP
  > = async ({ phone }) => {
    console.log("Calling handleSendOTP with phone:", phone);
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    if (!appVerifier) {
      toast.error("Recaptcha not initialized");
      return;
    }
    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phone,
        appVerifier
      );
      setConfirmationResult(confirmationResult);
      setIsOTPSent(true);
      toast.success("OTP sent successfully");
    } catch (error) {
      toast.error("Failed to send OTP. Please try again.");
    }
  };

  const handleVerifyOTP: SubmitHandler<ConfirmationResultValueProps> = async ({
    verificationOTP,
  }) => {
    if (!confirmationResult) {
      toast.error("No OTP sent. Please request an OTP first.");
      return;
    }

    try {
      await confirmationResult.confirm(verificationOTP);
      toast.success("OTP verified successfully");
      navigateTo("/home");
    } catch (error) {
      toast.error("Invalid OTP. Please try again.");
    }
  };

  return (
    <FormStyledContainer>
      <FormStyledTitle>Sign In</FormStyledTitle>
      <CloseButton onClick={closeLoginForm} />
      <div id="recaptcha-container" />
      <FormStyledForm onSubmit={handleSubmitPhone(handleSendOTP)}>
        <Controller
          name="phone"
          control={controlPhone}
          render={({ field }) => (
            <LoginPhoneInput
              country={"vn"}
              value={field.value}
              placeholder="Enter your phone number"
              onChange={(e) => {
                field.onChange(e);
                handleChangeToLogin();
              }}
              inputProps={{
                name: "phone",
                required: true,
              }}
            />
          )}
        />

        {errorsPhone.phone && (
          <InputCommonError>{errorsPhone.phone.message}</InputCommonError>
        )}

        {isOTPSent && (
          <FormStyledForm onSubmit={handleSubmitOTP(handleVerifyOTP)}>
            <InputCommon
              id="verificationOTP"
              lable="Verification OTP"
              name="verificationOTP"
              placeholder="Enter your OTP"
              register={registerOTP}
              errorMsg={errorsOTP.verificationOTP?.message}
            />
            <FormStyledButton type="submit">Verify OTP</FormStyledButton>
          </FormStyledForm>
        )}
        <FormStyledButton type="submit">Login</FormStyledButton>
        <FormStyledNavigate onClick={() => navigateTo("/login")}>
          Login with email
        </FormStyledNavigate>
        <FormStyledNavigate onClick={() => navigateTo("/register")}>
          Don't have an account? Register here
        </FormStyledNavigate>
      </FormStyledForm>
    </FormStyledContainer>
  );
};

export default LoginPhoneOTPComponent;
