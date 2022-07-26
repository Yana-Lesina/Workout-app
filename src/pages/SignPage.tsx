import React from "react";
import styles from "../styles/SignPage/SignPage.module.scss";

const SignPage: React.FC = () => {
  return (
    <form action="/main" className={styles.wrapper}>
      <fieldset>
        <legend>Sign Up</legend>

        <label htmlFor="email">Email: </label>
        <br />
        <input type="text" id="email" data-clear-button="true" />
        <label htmlFor="password">Password: </label>
        <br />
        <input
          type="password"
          id="password"
          data-clear-button="true"
          data-reveal-button="true"
        />
        <label htmlFor="confirmation">Password Confirmation: </label>
        <br />
        <input type="password" id="confirmation" data-clear-button="true" />

        <input type="submit" value="Sign Up"></input>

        <span>
          Already have an account? <a href="*">Sign in</a>
        </span>
      </fieldset>
    </form>
  );
};

export default SignPage;
