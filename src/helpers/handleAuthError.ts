import { FirebaseError } from "firebase/app";

export const handleAuthError = (error: Error) => {
  if (error instanceof FirebaseError) {
    const devErrorCode = error.code;

    if (devErrorCode === "auth/invalid-email") {
      return "Incorrect email syntax";
    } else if (devErrorCode === "auth/weak-password") {
      return "Password should be at least 6 characters ";
    } else if (devErrorCode === "auth/email-already-in-use") {
      return "There's already an account for this email ";
    } else if (devErrorCode === "auth/wrong-password") {
      return "Incorrect password";
    } else if (devErrorCode === "auth/user-not-found") {
      return "There's no such user ";
    } else return String(error.message);
  } else {
    reportError(error.message);
    return String(error.message);
  }
};
