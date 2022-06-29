/*eslint no-constant-condition: "warn"*/

import "./styles/App.scss";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { IWorkoutPart, IExercise } from "./interfaces";
import MainPage from "./pages/MainPage";
import ExercisePage from "./pages/ExercisePage";
import ErrorPage from "./pages/ErrorPage";

const App: React.FC = () => {
  const [error, setError] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<IWorkoutPart>();

  const createExercisesList = (elem: IWorkoutPart | undefined) => {
    const exerciseList: IExercise[] = [];
    elem?.questions.forEach((section: { exercises: IExercise[] }) => {
      section.exercises.forEach((exercise: IExercise) => {
        exerciseList.push(exercise);
      });
    });

    return exerciseList;
  };

  useEffect(() => {
    const getServerData = async () => {
      const serverData = await fetch(
        "https://rnd.kilohealthservices.com/api/quizzes/workouts?api_token=4bfcebd0-0216-4572-bdb7-939e9600b9b2",
      );
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
          <Route path="/error" element={<ErrorPage />} />
        ) : (
          <>
            <Route path="/" element={<MainPage elements={items} />} />
            <Route
              path="/exercise"
              element={<ExercisePage exercises={createExercisesList(items)} />}
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
