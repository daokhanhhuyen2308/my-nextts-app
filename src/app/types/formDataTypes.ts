export type LoginValueProps = {
    email: string;
    password: string;
}

export type LoginValuePropsWithPhoneNumberOTP = {
  phone: string;
}

export type LoginValuePropsWithEmailLink = {
  email: string;
  password: string;
}

export type ConfirmationResultValueProps = {
  verificationOTP: string;
}

export type RegisterValueProps = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: "female" | "male" | "other";
  phone: string;
};