import React from "react";
import "../styles/WorkoutCompleted/WorkoutCompleted.scss";
import SaveButton from "../components/general/ActionButton";
import CompletedImage from "../assets/images/completed-img.svg";
import { useSelector } from "react-redux";
import { RootState } from "../redux-store/store";

const WorkoutCompleted: React.FC = () => {
  const totalDuration = useSelector(
    (state: RootState) => state.workout.workoutItem.workoutDuration,
  );

  return (
    <>
      <div className="completed-img-container">
        <img
          src={CompletedImage}
          alt="completed-img"
          className="completed-img"
        />
      </div>

      <div className="result-message-box">
        <h1 className="completed-title">Workout completed!</h1>
        <h4 className="completed-text">
          Nice job. You’re done. Here’s the workout summary.
        </h4>
        <div className="total-duration-wrapper">
          <h5>Minutes</h5>
          <h3>{totalDuration}</h3>
        </div>
      </div>
      <SaveButton link="/main-page" innerText="Save & Continue" />
    </>
  );
};

export default WorkoutCompleted;
