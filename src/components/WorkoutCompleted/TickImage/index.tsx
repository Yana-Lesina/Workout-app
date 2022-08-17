import React from "react";
import styles from "./TickImage.module.scss";
import CompletedImage from "src/assets/images/completed-img.svg";

const TickImage = () => {
  return (
    <div className={styles.completedImgContainer}>
      <img
        src={CompletedImage}
        alt="completed-img"
        className={styles.completedImg}
      />
    </div>
  );
};

export default TickImage;
