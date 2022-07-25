import React from "react";
import styles from "../styles/ErrorPage/ErrorPage.module.scss";

const ErrorPage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <span>🤔 Page not found... </span>
    </div>
  );
};

export default ErrorPage;
