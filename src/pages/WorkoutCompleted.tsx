import React from "react";
import "../styles/WorkoutCompleted/WorkoutCompleted.scss";
import SaveButton from "../components/Button";
import CompletedImage from "../assets/images/completed-img.svg";

type WorkoutCompletedType = {
  totalDuration: number;
};

const WorkoutCompleted: React.FC<WorkoutCompletedType> = ({
  totalDuration = 0,
}) => {
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
      <SaveButton link="/" innerText="Save & Continue" />
    </>
  );
};

export default WorkoutCompleted;
