import "../App.css";
import React from "react";
import Timer from "../components/Timer";
import VideoPlayer from "../components/VideoPlayer";

import { IWorkoutPart } from "../interfaces";

// repeat type for MainPageType
// if nothing changes - create 1 Interface
type ExercisePageType = {
  elements: IWorkoutPart | undefined;
};

const ExercisePage: React.FC<ExercisePageType> = ({ elements }) => {
  return (
    <div>
      <h1>Just DO it</h1>
      <Timer />
      <VideoPlayer />
    </div>
  );
};

export default ExercisePage;
