import React from "react";
import styles from "./Exercise.module.scss";
import CompletedImage from "../../../assets/images/completed-img.svg";

type ExerciseIntroType = {
  title: string;
  duration: number;
  photo: string;
  finished?: true | undefined;
};

const Exercise: React.FC<ExerciseIntroType> = ({
  title,
  duration,
  photo,
  finished,
}) => {
  return (
    <div className={styles.exerciseContainer}>
      <div className={styles.exerciseImgWrapper}>
        <img
          src={CompletedImage}
          alt="completedImage"
          className={`${styles.completedImage} ${
            finished ? styles.finishedExercise : ""
          }`}
        />
        <img src={photo} alt="exercise-img" className={styles.exerciseImg} />
      </div>
      <div className={styles.exerciseInfoWrapper}>
        <div
          className={`${styles.exerciseTitle} ${
            finished ? styles.finishedExercise : ""
          }`}
        >
          {title}
        </div>
        <div className={styles.exerciseDuration}>{`${duration} sec`}</div>
      </div>
    </div>
  );
};

export default Exercise;
