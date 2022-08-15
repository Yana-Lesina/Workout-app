import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux-store/store";
import styles from "./Results.module.scss";

const ResultsContainer: React.FC = () => {
  const totalDuration = useSelector(
    (state: RootState) => state.workout.workoutItem.workoutDuration,
  );
  return (
    <>
      <h1 className="completed-title">Workout completed!</h1>
      <h4 className="completed-text">
        Nice job. You’re done. Here’s the workout summary.
      </h4>
      <div className="total-duration-wrapper">
        <h5>Minutes</h5>
        <h3>{totalDuration}</h3>
      </div>
    </>
  );
};

export default ResultsContainer;
