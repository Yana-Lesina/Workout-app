import "../App.css";
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

let counter = 20;

const ExercisePage: React.FC<ExercisePageType> = ({ exercises }) => {
  const [time, setTime] = useState<number>(5);
  const [prepared, setPrepared] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (exercises.length > counter) {
      if (time >= 1) {
        setTimeout(() => {
          setTime(time - 1);
        }, 1000);
        // console.log(time); // ?
        // return () => clearTimeout(timer);
      }

      // get ready -> exercise
      if (time === 0 && prepared === false) {
        setPrepared(true);
        setTime(exercises[counter].duration);
      }

      // exercise -> get ready
      if (time === 0 && prepared === true) {
        setTime(5);
        setPrepared(false);
        counter = counter + 1;
      }
      // last exercise -> Workout Completed!
    } else if (exercises.length <= counter) {
      setCompleted(true);
    }
  }, [time, counter]);

  return (
    <>
      {completed ? (
        <WorkoutCompleted totalDuration={0} />
      ) : prepared ? (
        <ExerciseInner
          title={exercises[counter]?.title}
          time={time}
          photo={exercises[counter]?.photo}
          videoLink={exercises[counter]?.video}
        />
      ) : (
        <PreparationInner time={time} photo={exercises[counter]?.photo} />
      )}
    </>
  );
};

export default ExercisePage;
