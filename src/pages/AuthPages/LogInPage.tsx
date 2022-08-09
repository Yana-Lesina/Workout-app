import React from "react";

import { useNavigate } from "react-router-dom";

import { handleAuthError } from "../../helpers/handleAuthError";

import { logIn } from "../../firebase/authFuncs";
import { useDispatch } from "react-redux";

import Form from "../../components/AuthPages/Form";
import Input from "../../components/AuthPages/Input";
import SubmitButton from "../../components/AuthPages/SubmitButton";
import ErrorMessage from "../../components/AuthPages/ErrorMessage";
import AnotherTargetLink from "../../components/AuthPages/AnotherTargetLink";

const LogInPage: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [errorMessage, setErrorMessage] = React.useState("");
  const [requestLoading, setRequestLoading] = React.useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userRole = useSelector((state: RootState) => state.user.role);

  const handleLogIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setRequestLoading(true);
    // await logIn(emailRef?.current?.value, passwordRef?.current?.value)
    //   .then(({ user }) => {
    //     dispatch(setCurrentUser({ email: user?.email, uid: user?.uid }));
    //     navigate("/main-page");
    //   })
    //   .catch((error) => {
    //     setErrorMessage(handleAuthError(error));
    //   })
    //   .finally(() => {
    //     setRequestLoading(false);
    //   });
  };

  return (
    <Form legendText="Log In" onSubmit={handleLogIn}>
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
      <AnotherTargetLink
        targetText="Forgot password? "
        path="/reset-password"
        linkText="Reset Password"
      />

      <SubmitButton innerText="Log In" disabled={requestLoading} />
      <AnotherTargetLink
        targetText="Need an account? "
        path="/sign-up"
        linkText="Sign up"
      />
    </Form>
  );
};

export default LogInPage;
