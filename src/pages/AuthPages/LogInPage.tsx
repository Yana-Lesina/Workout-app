import React, { useCallback } from "react";

import { logIn } from "../../firebase/authFuncs";
import { useSelector } from "react-redux";
import { RootState } from "../../redux-store/store";

import Form from "../../components/AuthPages/Form";
import Input from "../../components/AuthPages/Input";
import SubmitButton from "../../components/AuthPages/SubmitButton";
import ErrorMessage from "../../components/AuthPages/ErrorMessage";
import AnotherTargetLink from "../../components/AuthPages/AnotherTargetLink";
import ModalWindow from "../../components/AuthPages/ModalWindow";

const LogInPage: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const ifDisplayButton = useSelector(
    (state: RootState) => state.isButtonDisabled,
  );

  const handleLogIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    logIn(email, password);
  };

  return (
    <>
      <ModalWindow />
      <Form legendText="Log In" onSubmit={handleLogIn}>
        <ErrorMessage />

        <Input
          id="email"
          type="text"
          labelText="Email:"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />

        <Input
          id="password"
          type="password"
          labelText="Password:"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
        />
        <AnotherTargetLink
          targetText="Forgot password? "
          path="/reset-password"
          linkText="Reset Password"
        />

        <SubmitButton innerText="Log In" disabled={ifDisplayButton.value} />
        <AnotherTargetLink
          targetText="Need an account? "
          path="/sign-up"
          linkText="Sign up"
        />
      </Form>
    </>
  );
};

export default LogInPage;
