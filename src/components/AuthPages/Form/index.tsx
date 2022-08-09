import React, { Children } from "react";
import styles from "./Form.module.scss";

type FormType = {
  legendText: string;
  onSubmit: any;
  children: JSX.Element | JSX.Element[];
};

const Form: React.FC<FormType> = ({ legendText, onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} className={styles.wrapper} noValidate>
      <fieldset>
        <legend>{legendText}</legend>
        {children}
      </fieldset>
    </form>
  );
};

export default Form;
