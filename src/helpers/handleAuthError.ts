import { FirebaseError } from "firebase/app";
import { setError } from "../redux-store/slices/ErrorSlice";
import { store } from "../redux-store/store";

export const handleAuthError = (error: Error) => {
  console.log("here we go handleError block hello");

  if (error instanceof FirebaseError) {
    const devErrorCode = error.code;

    if (devErrorCode === "auth/invalid-email") {
      return "Incorrect email syntax";
    } else if (devErrorCode === "auth/weak-password") {
      return "Password should be at least 6 characters ";
    } else if (devErrorCode === "auth/email-already-in-use") {
      return "There's already an account for this email";
    } else if (devErrorCode === "auth/wrong-password") {
      return "Incorrect password";
    } else if (devErrorCode === "auth/user-not-found") {
      return "There's no such user";
    } else return error.message;
  } else {
    return error.message;
  }
};

// export const handleAuthError = (error: Error) => {
//   console.log("here we go handleError block hello");

//   if (error instanceof FirebaseError) {
//     const devErrorCode = error.code;

//     if (devErrorCode === "auth/invalid-email") {
//       store.dispatch(setError("Incorrect email syntax"));
//     } else if (devErrorCode === "auth/weak-password") {
//       store.dispatch(setError("Password should be at least 6 characters "));
//     } else if (devErrorCode === "auth/email-already-in-use") {
//       store.dispatch(setError("There's already an account for this email"));
//     } else if (devErrorCode === "auth/wrong-password") {
//       store.dispatch(setError("Incorrect password"));
//     } else if (devErrorCode === "auth/user-not-found") {
//       store.dispatch(setError("There's no such user"));
//     } else store.dispatch(setError(error.message));
//   } else {
//     store.dispatch(setError(error.message));
//   }
// };
