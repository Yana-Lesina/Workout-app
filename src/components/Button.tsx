import React from "react";
import "../styles/Button.scss";

import { Link } from "react-router-dom";

type IButton = {
  styles?: string;
  link: string;
  innerText: string;
};

const Button: React.FC<IButton> = ({ styles, link, innerText }) => {
  return (
    <Link to={link} className={`link-styles ${styles}`}>
      {innerText}
    </Link>
  );
};

export default Button;
