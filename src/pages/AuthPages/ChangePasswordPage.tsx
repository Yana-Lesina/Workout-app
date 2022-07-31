import React from "react";
import styles from "./AuthPages.module.scss";
import { Link, useNavigate } from "react-router-dom";

import { changePassword, reauthentication } from "../../firebase/authFuncs";
import { handleAuthError } from "../../helpers/handleAuthError";

import SubmitButton from "../../components/AuthPages/SubmitButton";

const ChangePasswordPage: React.FC = () => {
  const passwordRef = React.useRef<HTMLInputElement | null>(null);
  const newPasswordRef = React.useRef<HTMLInputElement | null>(null);
  const passwordConfirmRef = React.useRef<HTMLInputElement | null>(null);

  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [requestLoading, setRequestLoading] = React.useState<boolean>(false);

  const navigate = useNavigate();

  const handleChangePassword = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (
      passwordRef?.current?.value === undefined ||
      newPasswordRef?.current?.value === undefined ||
      passwordConfirmRef?.current?.value === undefined
    )
      return;

    if (newPasswordRef?.current?.value !== passwordConfirmRef?.current?.value)
      return setErrorMessage("Passwords do not match");

    setRequestLoading(true);

    await reauthentication(passwordRef?.current?.value)
      .then(() => {
        changePassword(newPasswordRef.current!.value);
        alert(`Password was changed successfully!`);
        navigate("/main-page");
      })
      .catch((error) => {
        setErrorMessage(handleAuthError(error));
      });

    setRequestLoading(false);
  };

  return (
    <form onSubmit={handleChangePassword} className={styles.wrapper}>
      <fieldset>
        <legend>Changing password..</legend>

        <span className={styles.errorMessage}>{errorMessage}</span>

        <label htmlFor="password">Password: </label>
        <br />
        <input type="password" id="password" ref={passwordRef} required />

        <label htmlFor="newPassword">New Password: </label>
        <br />
        <input type="password" id="newPassword" ref={newPasswordRef} required />

        <label htmlFor="confirmation">New Password Confirmation: </label>
        <br />
        <input
          type="password"
          id="confirmation"
          ref={passwordConfirmRef}
          required
        />

        <SubmitButton innerText="Change password" disabled={requestLoading} />

        <span className={styles.switchAuthText}>
          <Link to="/main-page">Go back to Main page</Link>
        </span>
      </fieldset>
    </form>
  );
};

export default ChangePasswordPage;
