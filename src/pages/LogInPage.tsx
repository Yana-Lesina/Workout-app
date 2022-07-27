import React from "react";
import styles from "../styles/SignPage/SignPage.module.scss";
import { Link } from "react-router-dom";

const LogInPage: React.FC = () => {
  const emailRef = React.useRef<HTMLInputElement | null>(null);
  const passwordRef = React.useRef<HTMLInputElement | null>(null);

  return (
    <form action="/main" className={styles.wrapper}>
      <fieldset>
        <legend>Log In</legend>

        <label htmlFor="email">Email: </label>
        <br />
        <input type="text" id="email" ref={emailRef} />

        <label htmlFor="password">Password: </label>
        <br />
        <input type="password" id="password" ref={passwordRef} />

        <input type="submit" value="Sign Up"></input>

        <span>
          Need an account? <Link to="/sign-up">Sign up</Link>
        </span>
      </fieldset>
    </form>
  );
};

export default LogInPage;
