/*eslint no-constant-condition: "warn"*/
import "./App.css";
import introImg from "./images/intro-img.png";
import React, { useState, useEffect } from "react";
import Container from "./components/Container";
import StartButton from "./components/StartButton";

import { IWorkoutPart } from "./interfaces";

const App: React.FC = () => {
  // const [error, setError] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState<any>(false);
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
  }, []);

  return { isLoaded } ? (
    <div className="wrapper">
      <div className="img-container">
        <img src={introImg} alt="intro-img" className="intro-img" />
      </div>
      <h4>Day 1</h4>
      <h1>Morning Flexibility Routine</h1>
      <h6>Easy 15 min no equipment</h6>
      <Container sections={items?.questions} />
      <StartButton />
    </div>
  ) : (
    <div> Загрузка... </div>
  );
};

export default App;
