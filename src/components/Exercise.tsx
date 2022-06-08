import React from "react";
import { ExerciseIntro } from "../interfaces";

const Exercise: React.FC<ExerciseIntro> = ({ title, duration, photo }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{duration}</div>
      <div>
        <img src={photo} />
      </div>
    </div>
  );
};

export default Exercise;
