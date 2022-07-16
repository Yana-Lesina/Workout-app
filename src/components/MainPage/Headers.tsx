import React from "react";
import styles from "../../styles/MainPage/Headers.module.scss";

type HeadersType = {
  daysAmount: number;
  workoutTitle: string;
};

const Headers: React.FC<HeadersType> = ({ daysAmount, workoutTitle }) => {
  return (
    <div className={styles.headersContainer}>
      <h4 className={styles.dayTitle}>Day {daysAmount}</h4>
      <h2 className={styles.workoutTitle}>{workoutTitle}</h2>
      <h6 className={styles.additionalTitle}>Easy • 15 min • No equipment </h6>
    </div>
  );
};

export default Headers;
