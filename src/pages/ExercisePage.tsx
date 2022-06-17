import "../App.css";
import React, { useState, useEffect } from "react";
import Timer from "../components/Timer";
// import VideoPlayer from "../components/VideoPlayer";

import { IWorkoutPart } from "../interfaces";

// repeat type for MainPageType
// if nothing changes - create 1 Interface
type ExercisePageType = {
  elements: IWorkoutPart | undefined;
};

const ExercisePage: React.FC<ExercisePageType> = ({ elements }) => {
  const [time, setTime] = useState<number>(5);
  const [ifPrepared, setPreparedState] = useState<boolean>(false);
  const [ifCompleted, setCompletedState] = useState<boolean>(false);

  const counter = 0;

  const exercisesList = elements?.questions.map((section) => {
    section.exercises.forEach((exercise) => {
      return exercise;
    });
  });

  useEffect(() => {
    if (time >= 1) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      // console.log(time); // ?
      // return () => clearTimeout(timer);
    }

    if (time === 0 && ifPrepared === false) {
      setPreparedState(true);
    }
  }, [time]);

  return (
    <div>
      {ifPrepared === false && <h1>Get Ready</h1>}
      {ifPrepared === true && <h1>Just DO it</h1>}

      <div className="timer">{time}</div>
      {time >= 1 && <div>prepare img</div>}
      {ifPrepared === true && <div>exercise</div>}
    </div>
  );
};

export default ExercisePage;
