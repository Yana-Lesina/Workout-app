import React from "react";
import styles from "../styles/SignPage/SignPage.module.scss";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../firebase/index";
import { RootState } from "../redux-store/store";

import { logIn } from "../firebase/authFuncs";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../redux-store/slices/userSlice";

const LogInPage: React.FC = () => {
  const emailRef = React.useRef<HTMLInputElement | null>(null);
  const passwordRef = React.useRef<HTMLInputElement | null>(null);

  const [errorMessage, setErrorMessage] = React.useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state: RootState) => state.user);

  const handleLogIn = async (event: any) => {
    event.preventDefault();
    if (
      emailRef?.current?.value === undefined ||
      passwordRef?.current?.value === undefined
    )
      return;

    await logIn(emailRef?.current?.value, passwordRef?.current?.value)
      .then(({ user }) => {
        console.log("user.email", user.email);

        dispatch(setCurrentUser({ email: user?.email, uid: user?.uid }));

        console.log("auth.currentUser", auth.currentUser?.email);
        console.log("userData", userData);

        navigate("/main-page");
      })
      .catch((error) => {
        const devErrorCode = error.code;
        const devErrorMessage = error.message;

        if (devErrorCode === "auth/wrong-password") {
          setErrorMessage("Incorrect password");
        } else if (devErrorCode === "auth/user-not-found") {
          setErrorMessage("There's no such user ");
        } else {
          setErrorMessage(devErrorMessage);
        }
      });
  };

  return (
    <form onSubmit={handleLogIn} className={styles.wrapper}>
      <fieldset>
        <legend>Log In</legend>

        <span className={styles.errorMessage}>{errorMessage}</span>

        <label htmlFor="email">Email: </label>
        <br />
        <input type="text" id="email" ref={emailRef} />

        <label htmlFor="password">Password: </label>
        <br />
        <input type="password" id="password" ref={passwordRef} />
        <span className={styles.switchAuthText}>
          Forgot password? <Link to="/reset-password">Reset Password</Link>
        </span>

        <input type="submit" value="Log In"></input>

        <span className={styles.switchAuthText}>
          Need an account? <Link to="/sign-up">Sign up</Link>
        </span>
      </fieldset>
    </form>
  );
};

export default LogInPage;
