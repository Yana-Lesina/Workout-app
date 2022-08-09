import React from "react";
import styles from "./ErrorMessage.module.scss";

type ErrorMessageType = {
  text: string;
};

const ErrorMessage: React.FC<ErrorMessageType> = ({ text }) => {
  return <span className={styles.errorMessage}>{text}</span>;
};

export default ErrorMessage;
