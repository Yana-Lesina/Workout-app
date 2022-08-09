/*eslint no-constant-condition: "warn"*/
import React from "react";
import styles from "./styles/App.module.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import { url } from "./forEnv";
import { WorkoutPartType, ExerciseType } from "./globalTypes";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux-store/store";
import { setCurrentUser } from "./redux-store/slices/userSlice";

import { setIsDataLoaded } from "./redux-store/slices/isLoadedSlice";

import { checkUser } from "./firebase/authFuncs";

import MainPage from "./pages/MainPage";
import ExercisePage from "./pages/ExercisePage";
import WorkoutCompleted from "./pages/WorkoutCompleted";
import ErrorPage from "./pages/ErrorPage";
import SignUpPage from "./pages/AuthPages/SignUpPage";
import LogInPage from "./pages/AuthPages/LogInPage";
import LoadingPage from "./pages/LoadingPage";
import ResetPasswordPage from "./pages/AuthPages/ResetPasswordPage";
import ChangePasswordPage from "./pages/AuthPages/ChangePasswordPage";
import ChangeEmailPage from "./pages/AuthPages/ChangeEmailPage";

const App: React.FC = () => {
  console.log("app render");
  const [error, setError] = React.useState<boolean>(false);

  const [completed, setCompleted] = React.useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  React.useEffect(() => {
    // const getServerData = async () => {
    //   const serverData = await fetch(url);
    //   return serverData;
    // };
    // getServerData()
    //   .then(async (res) => {
    //     const jsonData = await res.json();
    //     return jsonData;
    //   })
    //   .then((result) => {
    //     dispatch(setIsDataLoaded(true));
    //     setItems(result.data);
    //   })
    //   .catch((error: Error) => {
    //     dispatch(setIsDataLoaded(true));
    //     setError(true);
    //     reportError(error.message);
    //   });
  }, []);

  React.useEffect(() => {
    console.log("app UseEffect for getUser(onAuthStateChanged)");
    checkUser();
    // getUser((user) => {
    //   if (user) {
    //     console.log("catch user!", user);
    //     dispatch(
    //       setCurrentUser({
    //         email: user.email,
    //         uid: user.uid,
    //       }),
    //     );
    //     navigate("/main-page");
    //   } else {
    //     console.log("no user");
    //     navigate("/log-in");
    //   }
    // });
  }, []);

  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/log-in" element={<LogInPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
        <Route path="/change-email" element={<ChangeEmailPage />} />

        <Route
          path="/main-page"
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
        <Route path="/" element={<LoadingPage />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
