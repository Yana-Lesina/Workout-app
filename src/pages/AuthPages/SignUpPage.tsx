import React from "react";

import { signUp } from "../../firebase/authFuncs";
import { useSelector } from "react-redux";
import { RootState } from "../../redux-store/store";

import Form from "../../components/AuthPages/Form";
import ErrorMessage from "../../components/AuthPages/ErrorMessage";
import Input from "../../components/AuthPages/Input";
import SubmitButton from "../../components/AuthPages/SubmitButton";
import AnotherTargetLink from "../../components/AuthPages/AnotherTargetLink";
import ModalWindow from "../../components/AuthPages/ModalWindow";

const SignUpPage: React.FC = () => {
  console.log("SignUpPage render");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmation, setConfirmation] = React.useState("");

  const ifDisplayButton = useSelector(
    (state: RootState) => state.isButtonDisabled,
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    signUp(email, password, confirmation);
  };

  return (
    <>
      <ModalWindow />
      <Form legendText="Sign Up" onSubmit={handleSubmit}>
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
        <Input
          id="confirmation"
          type="password"
          labelText="Password Confirmation:"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmation(event.target.value)
          }
        />
        <SubmitButton innerText="Sign Up" disabled={ifDisplayButton.value} />
        <AnotherTargetLink
          targetText="Already have an account?"
          path="/log-in"
          linkText="Sign in"
        />
      </Form>
    </>
  );
};

export default SignUpPage;
