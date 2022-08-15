import React from "react";
import styles from "./PauseInformer.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux-store/store";

const PauseInformer: React.FC = () => {
  const workoutName = useSelector(
    (state: RootState) => state.workout.workoutItem.name,
  );
  return (
    <>
      <div className={styles.pauseInformer}>
        <div className={styles.pauseHeaders}>
          <h2 className={styles.pauseTitle}>Workout paused</h2>
          <div className={styles.pauseText}>
            Press “Play button” or “Space bar” to continue
          </div>
        </div>

        <div className={styles.leaveWorkoutButton}>
          <Link
            to={`/workout/:${workoutName}`}
            className={styles.leaveWorkoutButtonLi}
          >
            Leave Workout
          </Link>
        </div>
      </div>
    </>
  );
};

export default PauseInformer;
