import React from "react";
import { Link } from "react-router-dom";

interface IButton {
  styles: string;
  link: string;
  innerText: string;
}

const Button: React.FC<IButton> = ({ styles, link, innerText }) => {
  return (
    <button type="button" className={styles} autoFocus>
      <Link to={link}>{innerText}</Link>
    </button>
  );
};

export default Button;
