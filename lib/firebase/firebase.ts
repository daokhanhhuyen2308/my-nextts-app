// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqFrVZ_2Xqfe8M1LLl-LsBK5BZP-Qj_nE",
  authDomain: "daokhanhhuyen-801f2.firebaseapp.com",
  projectId: "daokhanhhuyen-801f2",
  storageBucket: "daokhanhhuyen-801f2.firebasestorage.app",
  messagingSenderId: "171395942772",
  appId: "1:171395942772:web:edb07681ec008c52568421",
  measurementId: "G-T74FBJ9F5M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth, analytics };
