import "../styles/App.scss";
import React, { useState, useEffect } from "react";

import { IExercise } from "../interfaces";
import { WorkoutCompleted } from "../components/WorkoutCompleted";
import BackImg from "../assets/images/back-img.svg";
import ForwardImg from "../assets/images/forward-img.svg";
import ArrowButton from "../components/ArrowButton";
import Timer from "../components/Timer";
import PrepareImage from "../components/PrepareImage";
import ExerciseVideo from "../components/ExerciseVideo";
import VideoFooter from "../components/VideoFooter";

// repeat type for MainPageType
// if nothing changes - create 1 Interface
type ExercisePageType = {
  exercises: IExercise[];
};

const ExercisePage: React.FC<ExercisePageType> = ({ exercises }) => {
  const [time, setTime] = React.useState<number>(5);
  const [prepared, setPrepared] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);
  const [ifPaused, setIfPaused] = React.useState(false);
  let timeoutID: NodeJS.Timeout | undefined;

  const switchToExercise = () => {
    setPrepared(true);
    setTime(exercises[counter].duration);
  };

  const switchToGetReady = (direction: -1 | 1) => {
    setTime(5);
    if (
      (counter === 0 && direction === 1) ||
      (counter > 0 && counter + 1 < exercises.length) ||
      (counter + 1 === exercises.length && direction === -1)
    ) {
      setCounter(counter + 1 * direction);
    }
    setPrepared(false);
    setIfPaused(false);
  };

  useEffect(() => {
    if (ifPaused) {
      clearTimeout(timeoutID);
    } else {
      if (time >= 1) {
        timeoutID = setTimeout(() => {
          setTime(time - 1);
        }, 1000);
      }
    }
    return () => clearTimeout(timeoutID);
  }, [ifPaused, time]);

  useEffect(() => {
    if (exercises.length > counter + 1) {
      // get ready -> exercise
      if (!time && !prepared) {
        switchToExercise();
      }
      // exercise -> get ready
      if (!time && prepared) {
        switchToGetReady(1);
      }
      // last exercise -> Workout Completed!
    } else if (exercises.length === counter + 1 && !time) {
      setCompleted(true);
    }
  }, [time, counter, prepared]);

  return (
    <>
      {completed ? (
        <WorkoutCompleted totalDuration={0} />
      ) : (
        <>
          <h2 className="current-exercise-title">
            {!prepared ? "Get ready" : exercises[counter].title}
          </h2>

          <div className="timer-wrapper">
            <ArrowButton
              imgLink={BackImg}
              onClick={
                !prepared
                  ? () => switchToExercise()
                  : () => switchToGetReady(-1)
              }
              className={counter === 0 && !prepared ? "extreme-element" : ""}
            />

            <Timer
              className={!prepared ? "get-ready-timer" : "exercise-timer"}
              time={time}
              duration={!prepared ? 5 : exercises[counter].duration}
            />

            <ArrowButton
              imgLink={ForwardImg}
              onClick={
                !prepared ? () => switchToExercise() : () => switchToGetReady(1)
              }
              className={
                counter + 1 === exercises.length && prepared
                  ? "extreme-element"
                  : ""
              }
            />
          </div>
          <div className="exercise-inner">
            {!prepared ? (
              <PrepareImage photo={exercises[counter].photo} />
            ) : (
              <>
                <ExerciseVideo
                  photo={exercises[counter].photo}
                  videoLink={exercises[counter].video}
                  ifPaused={ifPaused}
                />
                <VideoFooter
                  ifPaused={ifPaused}
                  onClick={() => {
                    setIfPaused(!ifPaused);
                  }}
                  onKeyPress={(event: { key: string }) => {
                    if (event.key === " " || event.key === "Enter") {
                      setIfPaused(!ifPaused);
                    }
                  }}
                />
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ExercisePage;
