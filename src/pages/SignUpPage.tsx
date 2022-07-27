import React from "react";
import styles from "../styles/SignPage/SignPage.module.scss";
import { Link } from "react-router-dom";

const SignUpPage: React.FC = () => {
  const emailRef = React.useRef<HTMLInputElement | null>(null);
  const passwordRef = React.useRef<HTMLInputElement | null>(null);
  const confirmationRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (event: any) => {};

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <fieldset>
        <legend>Sign Up</legend>

        <label htmlFor="email">Email: </label>
        <br />
        <input type="text" id="email" ref={emailRef} />

        <label htmlFor="password">Password: </label>
        <br />
        <input type="password" id="password" ref={passwordRef} />

        <label htmlFor="confirmation">Password Confirmation: </label>
        <br />
        <input type="password" id="confirmation" ref={confirmationRef} />

        <input type="submit" value="Sign Up"></input>

        <span>
          Already have an account? <Link to="/log-in">Sign in</Link>
        </span>
      </fieldset>
    </form>
  );
};

export default SignUpPage;
