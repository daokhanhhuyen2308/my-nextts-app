"use client"

import { RecaptchaVerifier } from "firebase/auth";
import { auth } from "./firebase";

declare global {
  interface Window {
    recaptchaVerifier?: RecaptchaVerifier;
  }
}

// new RecaptchaVerifier(auth: Auth, container: string, parameters: RecaptchaParameters)

export const setupRecaptcha = () => {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: () => {
          console.log("Recaptcha verified");
        },
      },
    );
    window.recaptchaVerifier.render();

  }
};
