// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

import {
  url,
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
  databaseURL: url,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getDatabase(app);
export default app;
