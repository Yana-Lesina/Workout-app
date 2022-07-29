import React, { useContext } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from "firebase/auth";

const AuthContext = React.createContext({});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider: React.FC<JSX.Element> = (children) => {
  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return auth.signOut();
  };
  const resetPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };
  const changeEmail = (email: string) => {
    if (auth.currentUser !== null) updateEmail(auth.currentUser, email);
  };
  const changePassword = (password: string) => {
    if (auth.currentUser !== null) updatePassword(auth.currentUser, password);
  };

  const value = {
    signUp,
    logIn,
    logOut,
    resetPassword,
    changeEmail,
    changePassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
