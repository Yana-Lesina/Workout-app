import "../styles/App.scss";
import React, { useState, useEffect } from "react";

import { IExercise } from "../interfaces";
import { WorkoutCompleted } from "../components/WorkoutCompleted";
import ExerciseInner from "../components/ExerciseInner";
import PreparationInner from "../components/PreparationInner";

// repeat type for MainPageType
// if nothing changes - create 1 Interface
type ExercisePageType = {
  exercises: IExercise[];
};

const ExercisePage: React.FC<ExercisePageType> = ({ exercises }) => {
  const [time, setTime] = useState<number>(5);
  const [prepared, setPrepared] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);
  const [ifPlaying, setIfPlaying] = useState<boolean>(true);

  let timeoutID: NodeJS.Timeout | undefined;

  const changeButton = () => {
    setIfPlaying(!ifPlaying);
  };

  useEffect(() => {
    if (!ifPlaying) {
      clearTimeout(timeoutID);
    } else {
      if (time >= 1) {
        timeoutID = setTimeout(() => {
          setTime(time - 1);
        }, 1000);
      }
    }
    return () => clearTimeout(timeoutID);
  }, [ifPlaying, time]);

  useEffect(() => {
    if (exercises.length > counter) {
      // get ready -> exercise
      if (!time && !prepared) {
        setPrepared(true);
        setTime(exercises[counter]?.duration);
      }

      // exercise -> get ready
      if (!time && prepared) {
        setTime(5);
        setPrepared(false);
        setCounter(counter + 1);
      }
      // last exercise -> Workout Completed!
    } else {
      setCompleted(true);
    }
  }, [time, counter, prepared]);

  return (
    <>
      {completed ? (
        <WorkoutCompleted totalDuration={0} />
      ) : prepared ? (
        <>
          <ExerciseInner
            title={exercises[counter].title}
            time={time}
            duration={exercises[counter].duration}
            photo={exercises[counter].photo}
            videoLink={exercises[counter].video}
            ifPlaying={ifPlaying}
            onClick={changeButton}
          />
        </>
      ) : (
        <PreparationInner
          time={time}
          duration={5}
          photo={exercises[counter]?.photo}
        />
      )}
    </>
  );
};

export default ExercisePage;
