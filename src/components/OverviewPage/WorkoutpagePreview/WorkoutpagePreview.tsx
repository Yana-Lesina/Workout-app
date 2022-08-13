import React from "react";
import { WorkoutPartType } from "../../../globalTypes";
import styles from "./WorkoutpagePreview.module.scss";

import IntroImg from "../../../assets/images/intro-img.png";
import { Link, useNavigate } from "react-router-dom";

type WorkoutpagePreviewType = {
  workout: WorkoutPartType;
  link: string;
};

const WorkoutpagePreview: React.FC<WorkoutpagePreviewType> = ({
  workout,
  link,
}) => {
  const navigate = useNavigate();

  const handleClick = (event: any) => {
    event.preventDefault();

    console.log(workout.name);

    navigate(`/workout/${workout.name}`);
  };
  return (
    <>
      <div className={styles.card} onClick={handleClick}>
        <div className={styles.imageWrapper}>
          <img src={IntroImg} alt="workout-image" className={styles.image} />
        </div>
        <div className={styles.workoutTitle}>{workout.name}</div>
      </div>
    </>
  );
};

export default WorkoutpagePreview;
