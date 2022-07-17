import React from "react";
import styles from "../../styles/ExercisePage/ArrowButton.module.scss";

type ArrowButtonType = {
  imgLink: string;
  onClick: any;
  isExtremeElement?: boolean;
};

const ArrowButton: React.FC<ArrowButtonType> = ({
  imgLink,
  onClick,
  isExtremeElement,
}) => {
  return (
    <div className={styles.arrowButtonWrapper}>
      <div
        className={`${styles.arrowButton} ${
          isExtremeElement ? styles.extremeElement : ""
        }`}
        onClick={onClick}
      >
        <img src={imgLink} alt="arrow-img" />
      </div>
    </div>
  );
};

export default ArrowButton;
