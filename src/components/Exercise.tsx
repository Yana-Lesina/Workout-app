import React from "react";
import CompletedImage from "../assets/images/completed-img.svg";

type ExerciseIntro = {
  title: string;
  duration: number;
  photo: string;
  className: string;
};

const Exercise: React.FC<ExerciseIntro> = ({
  title,
  duration,
  photo,
  className,
}) => {
  return (
    <div className="exercise-container">
      <div className="exercise-img-wrapper">
        <img
          src={CompletedImage}
          alt="completed-image"
          className={`completed-image ${className}`}
        />
        <img src={photo} className="exercise-img" />
      </div>
      <div className="exercise-info-wrapper">
        <div className={`exercise-title ${className}`}>
          <b>{title}</b>
        </div>
        <div className="exercise-duration">{`${duration} sec`}</div>
      </div>
    </div>
  );
};

export default Exercise;
