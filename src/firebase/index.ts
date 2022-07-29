// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {
  apiKey,
  authDomain,
  projID,
  storageBucket,
  senderID,
  appID,
} from "../forEnv";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projID,
  storageBucket: storageBucket,
  messagingSenderId: senderID,
  appId: appID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
