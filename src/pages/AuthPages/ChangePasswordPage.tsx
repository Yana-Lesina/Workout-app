import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../redux-store/store";
import { changePassword } from "../../firebase/authFuncs";

import SubmitButton from "../../components/AuthPages/SubmitButton";
import Input from "../../components/AuthPages/Input";
import Form from "../../components/AuthPages/Form";
import ErrorMessage from "../../components/AuthPages/ErrorMessage";
import AnotherTargetLink from "../../components/AuthPages/AnotherTargetLink";
import ModalWindow from "../../components/AuthPages/ModalWindow";

const ChangePasswordPage: React.FC = () => {
  const [password, setPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmation, setConfirmation] = React.useState("");

  const ifDisplayButton = useSelector(
    (state: RootState) => state.isButtonDisabled,
  );

  const handleChangePassword = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    changePassword(password, newPassword, confirmation);
  };

  return (
    <>
      <ModalWindow />
      <Form legendText="Changing password.." onSubmit={handleChangePassword}>
        <ErrorMessage />

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

        <SubmitButton
          innerText="Change password"
          disabled={ifDisplayButton.value}
        />
        <AnotherTargetLink path="/main-page" linkText="Go back to Main page" />
      </Form>
    </>
  );
};

export default ChangePasswordPage;
