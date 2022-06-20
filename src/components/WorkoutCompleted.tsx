import React from "react";
import SaveButton from "../components/Button";

type WorkoutCompletedType = {
  totalDuration: number;
};

export const WorkoutCompleted: React.FC<WorkoutCompletedType> = ({
  totalDuration = 0,
}) => {
  return (
    <>
      <h1>Workout completed!</h1>
      <h4>Nice job. You’re done. Here’s the workout summary.</h4>
      <div>
        <h6>Minutes</h6>
        <h3>{totalDuration}</h3>
      </div>
      <SaveButton styles="action-button" link="/" innerText="Save & Continue" />
    </>
  );
};
