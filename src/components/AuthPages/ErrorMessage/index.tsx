import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux-store/store";
import styles from "./ErrorMessage.module.scss";

const ErrorMessage: React.FC = () => {
  const errorText = useSelector((state: RootState) => state.errorMessage);

  return <span className={styles.errorMessage}>{errorText.value}</span>;
};

export default ErrorMessage;
