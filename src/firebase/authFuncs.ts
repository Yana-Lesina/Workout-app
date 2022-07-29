import auth from "../firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  NextOrObserver,
  User,
} from "firebase/auth";

export const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
export const logIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export const logOut = () => {
  return signOut(auth);
};
export const resetPassword = (email: string) => {
  return sendPasswordResetEmail(auth, email);
};
export const changeEmail = (email: string) => {
  if (auth.currentUser !== null) updateEmail(auth.currentUser, email);
};
export const changePassword = (password: string) => {
  if (auth.currentUser !== null) updatePassword(auth.currentUser, password);
};

export const getUser = (callback: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback);
};
