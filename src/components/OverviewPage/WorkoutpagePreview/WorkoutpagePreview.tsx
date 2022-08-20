import React from "react";
import { WorkoutPartType } from "../../../globalTypes";
import styles from "./WorkoutpagePreview.module.scss";

import IntroImg from "../../../assets/images/intro-img.png";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

type WorkoutpagePreviewType = {
  workout: WorkoutPartType;
  workoutID: number;
};

const WorkoutpagePreview: React.FC<WorkoutpagePreviewType> = ({
  workout,
  workoutID,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (event: any) => {
    event.preventDefault();

    navigate(`/workout/${workout.name}`, { state: { id: workoutID } });
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
