import React from "react";

import Form from "../../components/AuthPages/Form";
import Input from "../../components/AuthPages/Input";
import SubmitButton from "../../components/AuthPages/SubmitButton";
import ErrorMessage from "../../components/AuthPages/ErrorMessage";
import AnotherTargetLink from "../../components/AuthPages/AnotherTargetLink";

const ResetPasswordPage: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [requestLoading, setRequestLoading] = React.useState<boolean>(false);

  const handleResetPassword = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setRequestLoading(true);
    // await resetPassword(emailRef.current.value)
    //   .then(() => {
    //     alert(
    //       `Email sent, password reset!\nCheck your inbox for further instructions`,
    //     );
    //   })
    //   .catch((error) => {
    //     alert(`Something goes wrong...\n${error.code}`);
    //   })
    //   .finally(() => {
    //     setRequestLoading(false);
    //   });
  };

  return (
    <Form legendText="Password Reset" onSubmit={handleResetPassword}>
      <ErrorMessage text={errorMessage} />

      <Input
        id="email"
        type="text"
        labelText="Email:"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(event.target.value)
        }
      />

      <SubmitButton innerText="Reset Password" disabled={requestLoading} />

      <AnotherTargetLink path="/log-in" linkText="Log In" />
    </Form>
  );
};

export default ResetPasswordPage;
