import React from "react";
import styles from "./Button.module.scss";

import { Link } from "react-router-dom";

type IButton = {
  link: string;
  innerText: string;
};

const Button: React.FC<IButton> = ({ link, innerText }) => {
  return (
    <Link to={link} className={` ${styles.actionButton}`}>
      {innerText}
    </Link>
  );
};

export default Button;
