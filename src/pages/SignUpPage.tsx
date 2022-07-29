import React from "react";
import styles from "../styles/SignPage/SignPage.module.scss";
import { Link, useNavigate } from "react-router-dom";

import { signUp } from "../firebase/authFuncs";

import { useDispatch } from "react-redux";
import { setCurrentUser } from "../redux-store/slices/userSlice";

const SignUpPage: React.FC = () => {
  const emailRef = React.useRef<HTMLInputElement | null>(null);
  const passwordRef = React.useRef<HTMLInputElement | null>(null);
  const passwordConfirmRef = React.useRef<HTMLInputElement | null>(null);
  const [errorMessage, setErrorMessage] = React.useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (
      emailRef?.current?.value === undefined ||
      passwordRef?.current?.value === undefined
    )
      return;

    if (passwordRef?.current?.value !== passwordConfirmRef?.current?.value)
      return setErrorMessage("Passwords do not match");

    await signUp(emailRef.current.value, passwordRef.current.value)
      .then(({ user }) => {
        // <=> userCredential.user;

        // Signed in
        dispatch(
          setCurrentUser({
            email: user.email,
            uid: user.uid,
          }),
        );

        navigate("/main-page");
      })
      .catch((error) => {
        const devErrorCode = error.code;
        const devErrorMessage = error.message;

        if (devErrorCode === "auth/invalid-email") {
          setErrorMessage("Incorrect email syntax");
        } else if (devErrorCode === "auth/weak-password") {
          setErrorMessage("Password should be at least 6 characters ");
        } else if (devErrorCode === "auth/email-already-in-use") {
          setErrorMessage("There's already an account for this email ");
        } else {
          setErrorMessage(devErrorMessage);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <fieldset>
        <legend>Sign Up</legend>

        <span className={styles.errorMessage}>{errorMessage}</span>

        <label htmlFor="email">Email: </label>
        <br />
        <input type="text" id="email" ref={emailRef} />

        <label htmlFor="password">Password: </label>
        <br />
        <input type="password" id="password" ref={passwordRef} />

        <label htmlFor="confirmation">Password Confirmation: </label>
        <br />
        <input type="password" id="confirmation" ref={passwordConfirmRef} />

        <input type="submit" value="Sign Up"></input>

        <span className={styles.switchAuthText}>
          Already have an account? <Link to="/log-in">Sign in</Link>
        </span>
      </fieldset>
    </form>
  );
};

export default SignUpPage;
