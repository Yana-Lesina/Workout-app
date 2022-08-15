import React from "react";
import { WorkoutPartType } from "../../../globalTypes";
import styles from "./WorkoutpagePreview.module.scss";

import IntroImg from "../../../assets/images/intro-img.png";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setWorkout } from "../../../redux-store/slices/workoutSlice";

type WorkoutpagePreviewType = {
  workout: WorkoutPartType;
};

const WorkoutpagePreview: React.FC<WorkoutpagePreviewType> = ({ workout }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (event: any) => {
    event.preventDefault();

    dispatch(setWorkout(workout));
    navigate(`/workout/${workout.name}`);
  };

  // CHECK -------------------------------------
  React.useEffect(() => {
    console.log("WORKOUT FROM PREVIEW", workout);
  });

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
