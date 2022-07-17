import React from "react";
import styles from "../../styles/ExercisePage/ToHomepageButton.module.scss";
import { Link } from "react-router-dom";
import goToHomepage from "../../assets/images/goToHomepage.svg";

const ToHomepageButton: React.FC = () => {
  return (
    <div className={styles.toHomepageButton}>
      <Link to="/" className={styles.link}>
        <img src={goToHomepage} alt="goToHomepage" />
      </Link>
    </div>
  );
};

export default ToHomepageButton;
