/*eslint no-constant-condition: "warn"*/

import styles from "./styles/App.module.scss";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { WorkoutPartType, ExerciseType } from "./globalTypes";
import MainPage from "./pages/MainPage";
import ExercisePage from "./pages/ExercisePage";
import { WorkoutCompleted } from "./pages/WorkoutCompleted";
import ErrorPage from "./pages/ErrorPage";
import { url } from "./forEnv";

const App: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<WorkoutPartType>();
  const [startCounter, setStartCounter] = React.useState<number>(0);
  const [completed, setCompleted] = React.useState<boolean>(false);

  const createExercisesList = (elem: WorkoutPartType | undefined) => {
    const exerciseList: ExerciseType[] = [];
    elem?.questions.forEach((section: { exercises: ExerciseType[] }) => {
      section.exercises.forEach((exercise: ExerciseType) => {
        exerciseList.push(exercise);
      });
    });

    return exerciseList;
  };

  const setCompletedState = (ifDone: boolean) => {
    setCompleted(ifDone);
  };

  const setExerciseState = (id: number) => {
    exercises[id].finished = true;
    setStartCounter(findStartCounter());
  };

  const findStartCounter = () => {
    return exercises.findIndex((exercise) => !exercise.finished);
  };

  const exercises = createExercisesList(items);

  const countExerciseDuration = () => {
    return Math.round(
      exercises
        .map((exercise) => exercise.duration)
        ?.reduce((prev, current) => prev + current) / 60,
    );
  };

  // console.log("app render");

  useEffect(() => {
    const getServerData = async () => {
      const serverData = await fetch(url);
      return serverData;
    };

    getServerData()
      .then(async (res) => {
        const jsonData = await res.json();
        return jsonData;
      })
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
        },

        (error) => {
          setIsLoaded(true);
          setError(true);
        },
      );
  }, []);

  return { isLoaded } ? (
    <div className={styles.wrapper}>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              elements={items}
              ifCompleted={completed}
              isLoaded={isLoaded}
            />
          }
        />
        <Route
          path="/exercise"
          element={
            !completed ? (
              <ExercisePage
                exercises={exercises}
                startCounter={startCounter}
                setExerciseState={setExerciseState}
                setCompletedState={setCompletedState}
              />
            ) : (
              <WorkoutCompleted totalDuration={countExerciseDuration()} />
            )
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default App;
