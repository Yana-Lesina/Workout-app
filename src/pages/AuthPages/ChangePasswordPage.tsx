import React from "react";

import { useNavigate } from "react-router-dom";

import { changePassword, reauthentication } from "../../firebase/authFuncs";
import { handleAuthError } from "../../helpers/handleAuthError";

import SubmitButton from "../../components/AuthPages/SubmitButton";
import Input from "../../components/AuthPages/Input";
import Form from "../../components/AuthPages/Form";
import ErrorMessage from "../../components/AuthPages/ErrorMessage";
import AnotherTargetLink from "../../components/AuthPages/AnotherTargetLink";

const ChangePasswordPage: React.FC = () => {
  const [password, setPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmation, setConfirmation] = React.useState("");

  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [requestLoading, setRequestLoading] = React.useState<boolean>(false);

  const navigate = useNavigate();

  const handleChangePassword = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    // if (newPasswordRef?.current?.value !== passwordConfirmRef?.current?.value)
    //   return setErrorMessage("Passwords do not match");

    setRequestLoading(true);
    // await reauthentication(passwordRef?.current?.value)
    //   .then(() => {
    //     changePassword(newPasswordRef.current!.value)
    //       ?.then(() => {
    //         alert(`Password was changed successfully!`);

    //         navigate("/main-page");
    //       })
    //       .catch((error) => {
    //         setErrorMessage(handleAuthError(error));
    //       });
    //   })
    //   .catch((error) => {
    //     setErrorMessage(handleAuthError(error));
    //   })
    //   .finally(() => {
    //     setRequestLoading(false);
    //   });
  };

  return (
    <Form legendText="Changing password.." onSubmit={handleChangePassword}>
      <ErrorMessage text={errorMessage} />

      <Input
        id="password"
        type="password"
        labelText="Password:"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(event.target.value)
        }
      />
      <Input
        id="newPassword"
        type="password"
        labelText="New Password:"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setNewPassword(event.target.value)
        }
      />
      <Input
        id="confirmation"
        type="password"
        labelText="New Password Confirmation:"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setConfirmation(event.target.value)
        }
      />

      <SubmitButton innerText="Change password" disabled={requestLoading} />
      <AnotherTargetLink path="/main-page" linkText="Go back to Main page" />
    </Form>
  );
};

export default ChangePasswordPage;
