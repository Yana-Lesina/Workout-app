import React from "react";
import { WorkoutPartType } from "../../../globalTypes";
import styles from "./WorkoutpagePreview.module.scss";

import IntroImg from "../../../assets/images/intro-img.png";

type WorkoutpagePreviewType = {
  workout: WorkoutPartType;
};

const WorkoutpagePreview: React.FC<WorkoutpagePreviewType> = ({ workout }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={IntroImg} alt="workout-image" className={styles.image} />
      </div>
      <div className={styles.workoutTitle}>{workout.name}</div>
    </div>
  );
};

export default WorkoutpagePreview;
