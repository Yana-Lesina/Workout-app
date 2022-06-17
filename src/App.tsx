/*eslint no-constant-condition: "warn"*/
import "./App.css";

import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { IWorkoutPart, IExercise } from "./interfaces";

import MainPage from "./pages/MainPage";
import ExercisePage from "./pages/ExercisePage";

const App: React.FC = () => {
  // const [error, setError] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<IWorkoutPart>();

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

        // (error) => {
        //   setIsLoaded(true);
        //   setError(error);
        // },
      );
  }, [items]);

  return { isLoaded } ? (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<MainPage elements={items} />} />
        {/*<Route path="/get-ready" element={<Preparing />} />*/}
        <Route path="/exercise" element={<ExercisePage elements={items} />} />
        {/*<Route path="/completed" element={<Completed />} />*/}
        <Route path="*" element={<div>Nothing</div>} />
      </Routes>
    </div>
  ) : (
    <div> Загрузка... </div>
  );
};

export default App;
