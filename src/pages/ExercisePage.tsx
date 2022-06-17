import "../App.css";
import React, { useState, useEffect } from "react";
// import Timer from "../components/Timer";
// import VideoPlayer from "../components/VideoPlayer";

import { IWorkoutPart, IExercise } from "../interfaces";

// repeat type for MainPageType
// if nothing changes - create 1 Interface
type ExercisePageType = {
  exercises: IExercise[];
};

let counter = 0;

const ExercisePage: React.FC<ExercisePageType> = ({ exercises }) => {
  const [time, setTime] = useState<number>(5);
  const [prepared, setPrepared] = useState<boolean>(false);

  useEffect(() => {
    if (time >= 1) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      // console.log(time); // ?
      // return () => clearTimeout(timer);
    }

    if (time === 0 && prepared === false) {
      setPrepared(true);
      setTime(exercises[counter].duration);
    }

    if (time === 0 && prepared === true) {
      setTime(5);
      setPrepared(false);
      counter = counter + 1;
    }
  }, [time, counter]);

  return (
    <div>
      {prepared ? (
        <>
          <h1>{exercises[counter]?.title}</h1>
          <div className="timer get-ready-timer">{time}</div>
          <div>
            <video
              id="video-player"
              controls
              autoPlay
              loop
              poster={exercises[counter]?.photo}
              src={exercises[counter]?.video}
            ></video>
          </div>
        </>
      ) : (
        <>
          <h1>Get Ready</h1>
          <div className="timer exercise-timer">{time}</div>
          <div>
            <img
              src={exercises[counter]?.photo}
              alt="preview image"
              className="preview-img"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ExercisePage;
