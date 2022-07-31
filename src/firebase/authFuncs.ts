import { auth } from "../firebase";
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
  reauthenticateWithCredential,
  EmailAuthProvider,
  EmailAuthCredential,
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

export const getUser = (callback: NextOrObserver<User>) => {
  return onAuthStateChanged(auth, callback);
};

export const reauthentication = (userProvidedPassword: string) => {
  const user: User | null = auth.currentUser;
  let credential: EmailAuthCredential | null = null;

  if (auth.currentUser?.email !== null) {
    credential = EmailAuthProvider.credential(
      auth.currentUser!.email,
      userProvidedPassword,
    );
  }

  return reauthenticateWithCredential(user!, credential!);
};

export const changeEmail = (email: string) => {
  if (auth.currentUser !== null) updateEmail(auth.currentUser, email);
};

export const changePassword = (newPassword: string) => {
  if (auth.currentUser !== null) updatePassword(auth.currentUser, newPassword);
};
