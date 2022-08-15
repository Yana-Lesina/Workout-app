import React from "react";
import styles from "./Headers.module.scss";

type HeadersType = {
  daysAmount: number;
  workoutTitle: string;
  duration?: number;
};

const Headers: React.FC<HeadersType> = ({
  daysAmount,
  workoutTitle,
  duration = 0,
}) => {
  return (
    <div className={styles.headersContainer}>
      <h4 className={styles.dayTitle}>Day {daysAmount}</h4>
      <h2 className={styles.workoutTitle}>{workoutTitle}</h2>
      <h6 className={styles.additionalTitle}>
        Easy • {duration} min • No equipment
      </h6>
    </div>
  );
};

export default Headers;
