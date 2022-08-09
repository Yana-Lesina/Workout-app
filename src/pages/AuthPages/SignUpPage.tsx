import React from "react";
import { useNavigate } from "react-router-dom";

import { signUp } from "../../firebase/authFuncs";
import { useDispatch } from "react-redux";

import Form from "../../components/AuthPages/Form";
import ErrorMessage from "../../components/AuthPages/ErrorMessage";
import Input from "../../components/AuthPages/Input";
import SubmitButton from "../../components/AuthPages/SubmitButton";
import AnotherTargetLink from "../../components/AuthPages/AnotherTargetLink";

const SignUpPage: React.FC = () => {
  console.log("SignUpPage render");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmation, setConfirmation] = React.useState("");

  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [requestLoading, setRequestLoading] = React.useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setRequestLoading(true);
    signUp(email, password, confirmation);
    // await signUp(emailRef.current.value, passwordRef.current.value)
    //   .then(({ user }) => {
    //     // <=> userCredential.user;

    //     // Signed in
    //     dispatch(
    //       setCurrentUser({
    //         email: user.email,
    //         uid: user.uid,
    //       }),
    //     );

    //     navigate("/main-page");
    //   })
    //   .catch((error) => {
    //     setErrorMessage(handleAuthError(error));
    //   })
    //   .finally(() => {
    //     setRequestLoading(false);
    //   });
    setRequestLoading(false);
  };

  return (
    <Form legendText="Sign Up" onSubmit={handleSubmit}>
      <ErrorMessage text={errorMessage} />
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
      <SubmitButton innerText="Sign Up" disabled={requestLoading} />
      <AnotherTargetLink
        targetText="Already have an account?"
        path="/log-in"
        linkText="Sign in"
      />
    </Form>
  );
};

export default SignUpPage;
