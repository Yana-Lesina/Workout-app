import React from "react";
import { useNavigate } from "react-router-dom";

import { handleAuthError } from "../../helpers/handleAuthError";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../redux-store/slices/userSlice";

import Form from "../../components/AuthPages/Form";
import Input from "../../components/AuthPages/Input";
import SubmitButton from "../../components/AuthPages/SubmitButton";
import ErrorMessage from "../../components/AuthPages/ErrorMessage";
import AnotherTargetLink from "../../components/AuthPages/AnotherTargetLink";
import { RootState } from "../../redux-store/store";

const ChangeEmailPage: React.FC = () => {
  const [password, setPassword] = React.useState("");
  const [newEmail, setNewEmail] = React.useState("");
  const [buttonDisabled, setButtonDisabled] = React.useState<boolean>(false);

  const handleChangeEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setButtonDisabled(true);

    // await reauthentication(passwordRef?.current?.value)
    //   .then(() => {
    //     changeEmail(newEmailRef.current!.value)
    //       ?.then(() => {
    //         getUser((user) => {
    //           if (user) {
    //             dispatch(
    //               setCurrentUser({
    //                 email: user.email,
    //                 uid: user.uid,
    //               }),
    //             );
    //           }
    //         });
    //       })
    //       .catch((error) => reportError(error));

    //     alert(`Email was changed successfully!`);
    //     navigate("/main-page");
    //   })
    //   .catch((error) => {
    //     setErrorMessage(handleAuthError(error));
    //   })
    //   .finally(() => {
    //     setShowModal(false);
    //   });

    setButtonDisabled(false);
  };

  return (
    <Form legendText="Changing email.." onSubmit={handleChangeEmail}>
      {/* <ErrorMessage />

      <Input
        id="password"
        type="password"
        labelText="Password:"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(event.target.value)
        }
      />
      <Input
        id="newEmail"
        type="text"
        labelText="New Email:"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setNewEmail(event.target.value)
        }
      />

      <SubmitButton innerText="Change email" disabled={buttonDisabled} />

      <AnotherTargetLink path="//main-page" linkText="Go back to Main page" /> */}
    </Form>
  );
};

export default ChangeEmailPage;
