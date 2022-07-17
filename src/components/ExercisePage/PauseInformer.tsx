import React from "react";
import styles from "../../styles/ExercisePage/PauseInformer.module.scss";
import { Link } from "react-router-dom";

const PauseInformer: React.FC = () => {
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
          <Link to="/" className={styles.leaveWorkoutButtonLi}>
            Leave Workout
          </Link>
        </div>
      </div>
    </>
  );
};

export default PauseInformer;
