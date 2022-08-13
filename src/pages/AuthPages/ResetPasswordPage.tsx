import React from "react";

import { RootState } from "../../redux-store/store";
import { useSelector } from "react-redux";
import { resetPassword } from "../../firebase/authFuncs";

import Form from "../../components/AuthPages/Form";
import Input from "../../components/AuthPages/Input";
import SubmitButton from "../../components/AuthPages/SubmitButton";
import ErrorMessage from "../../components/AuthPages/ErrorMessage";
import AnotherTargetLink from "../../components/AuthPages/AnotherTargetLink";
import ModalWindow from "../../components/AuthPages/ModalWindow";

const ResetPasswordPage: React.FC = () => {
  const [email, setEmail] = React.useState("");

  const ifDisplayButton = useSelector(
    (state: RootState) => state.isButtonDisabled,
  );

  const handleResetPassword = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    console.log("handleResetPassword");

    resetPassword(email);
  };

  return (
    <>
      <ModalWindow />
      <Form legendText="Password Reset" onSubmit={handleResetPassword}>
        <ErrorMessage />

        <Input
          id="email"
          type="text"
          labelText="Email:"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />

        <SubmitButton
          innerText="Reset Password"
          disabled={ifDisplayButton.value}
        />

        <AnotherTargetLink path="/log-in" linkText="Log In" />
      </Form>
    </>
  );
};

export default ResetPasswordPage;
