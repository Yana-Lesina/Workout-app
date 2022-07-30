import React from "react";
import styles from "./SubmitButton.module.scss";

type SubmitButtonType = {
  innerText: string;
  disabled: boolean;
};

const SubmitButton: React.FC<SubmitButtonType> = ({ innerText, disabled }) => {
  return (
    <input
      type="submit"
      value={innerText}
      disabled={disabled}
      className={styles.submitButton}
    />
  );
};

export default SubmitButton;
