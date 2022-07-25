/*eslint no-constant-condition: "warn"*/
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setStartCounter } from "./redux-store/slices/startCounterSlice";
import { setIsDataLoaded } from "./redux-store/slices/isLoadedSlice";

import styles from "./styles/App.module.scss";
import { url } from "./forEnv";
import { WorkoutPartType, ExerciseType } from "./globalTypes";

import MainPage from "./pages/MainPage";
import ExercisePage from "./pages/ExercisePage";
import WorkoutCompleted from "./pages/WorkoutCompleted";
import ErrorPage from "./pages/ErrorPage";

const App: React.FC = () => {
  const [error, setError] = React.useState<boolean>(false);
  const [items, setItems] = React.useState<WorkoutPartType>();
  const [completed, setCompleted] = React.useState<boolean>(false);

  const dispatch = useDispatch();

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

    dispatch(setStartCounter(findStartCounter()));
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

  React.useEffect(() => {
    // console.log("useEffect with fetch");
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
          dispatch(setIsDataLoaded(true));
          setItems(result.data);
        },

        (error) => {
          // console.log("error", error.message);
          dispatch(setIsDataLoaded(true));
          setError(true);
        },
      );
  }, []);

  return (
    <div className={styles.wrapper}>
      <Routes>
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
                // startCounter={startCounter}
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
  );
};

export default App;
