import React from "react";
import styles from "./Input.module.scss";

type InputType = {
  id: string;
  type: "text" | "password";
  labelText: string;
  onChange?: any;
};

const Input: React.FC<InputType> = ({ id, type, labelText, onChange }) => {
  console.log("input render", id);
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {labelText}
      </label>
      <br />
      <input
        type={type}
        id={id}
        onChange={onChange}
        className={styles.input}
        required
      />
    </>
  );
};

export default Input;
