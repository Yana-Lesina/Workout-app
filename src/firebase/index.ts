// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
const firebaseConfig = {
  apiKey: fApiKey,
  authDomain: fAuthDomain,
  projectId: fProjID,
  storageBucket: fStorageBucket,
  messagingSenderId: fSenderID,
  appId: fAppID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app;
