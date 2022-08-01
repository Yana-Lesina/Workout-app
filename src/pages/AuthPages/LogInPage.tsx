import React from "react";
import styles from "./AuthPages.module.scss";

import { Link, useNavigate } from "react-router-dom";

import { handleAuthError } from "../../helpers/handleAuthError";

import { logIn } from "../../firebase/authFuncs";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../redux-store/slices/userSlice";
import SubmitButton from "../../components/AuthPages/SubmitButton";
import { RootState } from "../../redux-store/store";

const LogInPage: React.FC = () => {
  const emailRef = React.useRef<HTMLInputElement | null>(null);
  const passwordRef = React.useRef<HTMLInputElement | null>(null);

  const [errorMessage, setErrorMessage] = React.useState("");
  const [requestLoading, setRequestLoading] = React.useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userRole = useSelector((state: RootState) => state.user.role);

  const handleLogIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      emailRef?.current?.value === undefined ||
      passwordRef?.current?.value === undefined
    )
      return;

    setRequestLoading(true);
    await logIn(emailRef?.current?.value, passwordRef?.current?.value)
      .then(({ user }) => {
        dispatch(
          setCurrentUser({
            email: user?.email,
            uid: user?.uid,
            role: userRole,
          }),
        );
        navigate("/main-page");
      })
      .catch((error) => {
        setErrorMessage(handleAuthError(error));
      })
      .finally(() => {
        setRequestLoading(false);
      });
  };

  return (
    <form onSubmit={handleLogIn} className={styles.wrapper}>
      <fieldset>
        <legend>Log In</legend>

        <span className={styles.errorMessage}>{errorMessage}</span>

        <label htmlFor="email">Email: </label>
        <br />
        <input type="text" id="email" ref={emailRef} required />

        <label htmlFor="password">Password: </label>
        <br />
        <input type="password" id="password" ref={passwordRef} required />
        <span className={styles.switchAuthText}>
          Forgot password? <Link to="/reset-password">Reset Password</Link>
        </span>

        <SubmitButton innerText="Log In" disabled={requestLoading} />

        <span className={styles.switchAuthText}>
          Need an account? <Link to="/sign-up">Sign up</Link>
        </span>
      </fieldset>
    </form>
  );
};

export default LogInPage;
