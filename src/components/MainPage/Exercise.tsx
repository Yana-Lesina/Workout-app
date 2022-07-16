import React from "react";
import styles from "../../styles/MainPage/Exercise.module.scss";
import CompletedImage from "../../assets/images/completed-img.svg";

type ExerciseIntro = {
  title: string;
  duration: number;
  photo: string;
  isFinished: true | undefined;
};

const Exercise: React.FC<ExerciseIntro> = ({
  title,
  duration,
  photo,
  isFinished,
}) => {
  return (
    <div className={styles.exerciseContainer}>
      <div className={styles.exerciseImgWrapper}>
        <img
          src={CompletedImage}
          alt="completedImage"
          className={`${styles.completedImage} ${
            isFinished ? styles.finishedExercise : ""
          }`}
        />
        <img src={photo} alt="exercise-img" className={styles.exerciseImg} />
      </div>
      <div className={styles.exerciseInfoWrapper}>
        <div
          className={`${styles.exerciseTitle} ${
            isFinished ? styles.finishedExercise : ""
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
