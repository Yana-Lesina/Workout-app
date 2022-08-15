import React from "react";
import styles from "./GoBackButton.module.scss";
import { Link } from "react-router-dom";
import goToHomepage from "../../../assets/images/goToHomepage.svg";

const GoBackButton: React.FC<{ path: string }> = ({ path }) => {
  console.log("path", path);

  return (
    <div className={styles.toHomepageButton}>
      <Link to={path} className={styles.link}>
        <img src={goToHomepage} alt="goToHomepage" />
      </Link>
    </div>
  );
};

export default GoBackButton;
