/*eslint no-constant-condition: "warn"*/

import "./styles/App.scss";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { IWorkoutPart, IExercise } from "./interfaces";
import MainPage from "./pages/MainPage";
import ExercisePage from "./pages/ExercisePage";
import { WorkoutCompleted } from "./pages/WorkoutCompleted";
import ErrorPage from "./pages/ErrorPage";
import { url } from "./forEnv";

const App: React.FC = () => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<IWorkoutPart>();
  const [startCounter, setStartCounter] = React.useState<number>(0);
  const [completed, setCompleted] = React.useState<boolean>(false);

  const createExercisesList = (elem: IWorkoutPart | undefined) => {
    const exerciseList: IExercise[] = [];
    elem?.questions.forEach((section: { exercises: IExercise[] }) => {
      section.exercises.forEach((exercise: IExercise) => {
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
          setError(error);
        },
      );
  }, []);

  return { isLoaded } ? (
    <div className="wrapper">
      <Routes>
        {error ? (
          <Route
            path="/error"
            element={<ErrorPage errorMessage={error.message} />}
          />
        ) : (
          <>
            <Route
              path="/"
              element={<MainPage elements={items} ifCompleted={completed} />}
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
            <Route path="*" element={<div>Nothing</div>} />
          </>
        )}
      </Routes>
    </div>
  ) : (
    <div> Loading... </div>
  );
};

export default App;
