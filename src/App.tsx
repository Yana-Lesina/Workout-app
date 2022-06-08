/*eslint no-constant-condition: "warn"*/
import "./App.css";
import React, { useState, useEffect } from "react";
import Container from "./components/Container";
import { IWorkoutPart } from "./interfaces";

// interface AppType {
//   loggedIn: boolean;
// }

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
    <>
      <p>Workout app!!</p>
      <Container sections={items?.questions} />
    </>
  ) : (
    <div> Загрузка... </div>
  );
};

export default App;
