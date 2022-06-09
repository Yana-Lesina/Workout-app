import React from "react";
import { ExerciseIntro } from "../interfaces";

const Exercise: React.FC<ExerciseIntro> = ({ title, duration, photo }) => {
  return (
    <div className="exercise-container">
      <div className="exercise-img-wrapper">
        <img src={photo} className="exercise-img" />
      </div>
      <div className="exercise-info-wrapper">
        <div className="exercise-title">
          <b>{title}</b>
        </div>
        <div className="exercise-duration">{duration}</div>
      </div>
    </div>
  );
};

export default Exercise;
