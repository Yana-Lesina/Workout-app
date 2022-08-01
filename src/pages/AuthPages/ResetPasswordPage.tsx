import React from "react";
import styles from "./AuthPages.module.scss";

import { Link } from "react-router-dom";

import { resetPassword } from "../../firebase/authFuncs";
import SubmitButton from "../../components/AuthPages/SubmitButton";

const ResetPasswordPage: React.FC = () => {
  const emailRef = React.useRef<HTMLInputElement | null>(null);

  const [errorMessage, setErrorMessage] = React.useState("");
  const [requestLoading, setRequestLoading] = React.useState<boolean>(false);

  const handleResetPassword = async (event: any) => {
    event.preventDefault();
    if (emailRef?.current?.value === undefined)
      return setErrorMessage("Enter email for resetting password");

    setRequestLoading(true);
    await resetPassword(emailRef.current.value)
      .then(() => {
        alert(
          `Email sent, password reset!\nCheck your inbox for further instructions`,
        );
      })
      .catch((error) => {
        alert(`Something goes wrong...\n${error.code}`);
      })
      .finally(() => {
        setRequestLoading(false);
      });
  };

  return (
    <form onSubmit={handleResetPassword} className={styles.wrapper}>
      <fieldset>
        <legend>Password Reset</legend>

        <span className={styles.errorMessage}>{errorMessage}</span>

        <label htmlFor="email">Email: </label>
        <br />
        <input type="text" id="email" ref={emailRef} required />

        <SubmitButton innerText="Reset Password" disabled={requestLoading} />

        <span className={styles.switchAuthText}>
          <Link to="/log-in">Log In</Link>
        </span>
      </fieldset>
    </form>
  );
};

export default ResetPasswordPage;
