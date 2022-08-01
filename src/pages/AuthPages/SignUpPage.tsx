import React from "react";
import styles from "./AuthPages.module.scss";
import { Link, useNavigate } from "react-router-dom";

import { signUp } from "../../firebase/authFuncs";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux-store/slices/userSlice";

import { handleAuthError } from "../../helpers/handleAuthError";
import SubmitButton from "../../components/AuthPages/SubmitButton";

const SignUpPage: React.FC = () => {
  const emailRef = React.useRef<HTMLInputElement | null>(null);
  const passwordRef = React.useRef<HTMLInputElement | null>(null);
  const passwordConfirmRef = React.useRef<HTMLInputElement | null>(null);
  const [activeRoleID, setActiveRoleID] = React.useState<number>(0);

  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [requestLoading, setRequestLoading] = React.useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const roles = ["User", "Trainer"];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      emailRef?.current?.value === undefined ||
      passwordRef?.current?.value === undefined
    )
      return;

    if (passwordRef?.current?.value !== passwordConfirmRef?.current?.value)
      return setErrorMessage("Passwords do not match");

    setRequestLoading(true);
    await signUp(emailRef.current.value, passwordRef.current.value)
      .then(({ user }) => {
        // <=> userCredential.user;

        // Signed in
        dispatch(
          setCurrentUser({
            email: user.email,
            uid: user.uid,
            role: roles[activeRoleID],
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
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <fieldset>
        <legend>Sign Up</legend>
        <div className={styles.rolesWrapper}>
          {roles.map((role, id) => {
            return (
              <div
                className={`${styles.roleBlock} ${
                  id === activeRoleID ? styles.active : " "
                }`}
                onClick={() => setActiveRoleID(id)}
              >
                as {role}
              </div>
            );
          })}
        </div>

        <span className={styles.errorMessage}>{errorMessage}</span>

        <label htmlFor="email">Email: </label>
        <br />
        <input type="text" id="email" ref={emailRef} required />

        <label htmlFor="password">Password: </label>
        <br />
        <input type="password" id="password" ref={passwordRef} required />

        <label htmlFor="confirmation">Password Confirmation: </label>
        <br />
        <input
          type="password"
          id="confirmation"
          ref={passwordConfirmRef}
          required
        />

        <SubmitButton innerText="Sign Up" disabled={requestLoading} />

        <span className={styles.switchAuthText}>
          Already have an account? <Link to="/log-in">Sign in</Link>
        </span>
      </fieldset>
    </form>
  );
};

export default SignUpPage;
