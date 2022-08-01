import React from "react";
import styles from "./AuthPages.module.scss";
import { Link, useNavigate } from "react-router-dom";

import {
  changeEmail,
  getUser,
  reauthentication,
} from "../../firebase/authFuncs";

import { handleAuthError } from "../../helpers/handleAuthError";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux-store/slices/userSlice";

import SubmitButton from "../../components/AuthPages/SubmitButton";

const ChangeEmailPage: React.FC = () => {
  const passwordRef = React.useRef<HTMLInputElement | null>(null);
  const newEmailRef = React.useRef<HTMLInputElement | null>(null);

  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [requestLoading, setRequestLoading] = React.useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      passwordRef?.current?.value === undefined ||
      newEmailRef?.current?.value === undefined
    )
      return;

    setRequestLoading(true);

    await reauthentication(passwordRef?.current?.value)
      .then(() => {
        changeEmail(newEmailRef.current!.value)
          ?.then(() => {
            getUser((user) => {
              if (user) {
                dispatch(
                  setCurrentUser({
                    email: user.email,
                    uid: user.uid,
                  }),
                );
              }
            });
          })
          .catch((error) => reportError(error));

        alert(`Email was changed successfully!`);
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
    <form onSubmit={handleChangeEmail} className={styles.wrapper}>
      <fieldset>
        <legend>Changing email..</legend>

        <span className={styles.errorMessage}>{errorMessage}</span>

        <label htmlFor="password">Password: </label>
        <br />
        <input type="password" id="password" ref={passwordRef} required />

        <label htmlFor="newEmail">New Email: </label>
        <br />
        <input type="text" id="newEmail" ref={newEmailRef} required />

        <SubmitButton innerText="Change email" disabled={requestLoading} />

        <span className={styles.switchAuthText}>
          <Link to="/main-page">Go back to Main page</Link>
        </span>
      </fieldset>
    </form>
  );
};

export default ChangeEmailPage;
