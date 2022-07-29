// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import {
  fApiKey,
  fAuthDomain,
  fProjID,
  fStorageBucket,
  fSenderID,
  fAppID,
} from "../forEnv";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const app = firebase.initializeApp({
  apiKey: fApiKey,
  authDomain: fAuthDomain,
  projectId: fProjID,
  storageBucket: fStorageBucket,
  messagingSenderId: fSenderID,
  appId: fAppID,
});

const auth = app.auth();
export default auth;

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);
