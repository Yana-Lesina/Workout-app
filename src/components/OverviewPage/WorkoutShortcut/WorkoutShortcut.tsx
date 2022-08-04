import React from "react";
import styles from "./WorkoutShortcut.module.scss";
import addImg from "../../../assets/images/add.svg";

const WorkoutShortcut = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={addImg} alt="add-image" className={styles.image} />
      </div>
    </div>
  );
};

export default WorkoutShortcut;
