import { FirebaseError } from "firebase/app";
import { useDispatch } from "react-redux";
import { setError } from "../redux-store/slices/ErrorSlice";

export const handleAuthError = (error: Error) => {
  const dispatch = useDispatch();

  if (error instanceof FirebaseError) {
    const devErrorCode = error.code;

    if (devErrorCode === "auth/invalid-email") {
      dispatch(setError("Incorrect email syntax"));
    } else if (devErrorCode === "auth/weak-password") {
      dispatch(setError("Password should be at least 6 characters "));
    } else if (devErrorCode === "auth/email-already-in-use") {
      dispatch(setError("There's already an account for this email"));
    } else if (devErrorCode === "auth/wrong-password") {
      dispatch(setError("Incorrect password"));
    } else if (devErrorCode === "auth/user-not-found") {
      dispatch(setError("There's no such user"));
    } else dispatch(setError(error.message));
  } else {
    setError(error.message);
  }
};
