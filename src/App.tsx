/*eslint no-constant-condition: "warn"*/
import React from "react";
import styles from "./styles/App.module.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import { url } from "./forEnv";
import { WorkoutPartType, ExerciseType } from "./globalTypes";

import { useDispatch, useSelector } from "react-redux";
import { setStartCounter } from "./redux-store/slices/startCounterSlice";
import { setIsDataLoaded } from "./redux-store/slices/isLoadedSlice";

import { checkUser } from "./firebase/authFuncs";

import WorkoutPage from "./pages/WorkoutPage";
import ExercisePage from "./pages/ExercisePage";
import WorkoutCompleted from "./pages/WorkoutCompleted";
import ErrorPage from "./pages/ErrorPage";
import SignUpPage from "./pages/AuthPages/SignUpPage";
import LogInPage from "./pages/AuthPages/LogInPage";
import LoadingPage from "./pages/LoadingPage";
import ResetPasswordPage from "./pages/AuthPages/ResetPasswordPage";
import ChangePasswordPage from "./pages/AuthPages/ChangePasswordPage";
import ChangeEmailPage from "./pages/AuthPages/ChangeEmailPage";

import { RootState } from "./redux-store/store";
import { setCurrentUser } from "./redux-store/slices/userSlice";
import OverviewPage from "./pages/OverviewPage/OverviewPage";

import { getDatabase, ref, child, get } from "firebase/database";
import { getServerData } from "./firebase/databaseFuncs";

const App: React.FC = () => {
  const [error, setError] = React.useState<boolean>(false);

  const [completed, setCompleted] = React.useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createExercisesList = (elem: WorkoutPartType[] | undefined) => {
    if (elem === undefined) return;
    const exerciseList: ExerciseType[] = [];
    elem[0]?.questions.forEach((section: { exercises: ExerciseType[] }) => {
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
    if (exercises !== undefined) exercises[id].finished = true;

    dispatch(setStartCounter(findStartCounter()));
  };

  const findStartCounter = () => {
    return exercises !== undefined
      ? exercises.findIndex((exercise) => !exercise.finished)
      : 0;
  };

  const exercises = createExercisesList(items);

  const countExerciseDuration = () => {
    return exercises !== undefined
      ? Math.round(
          exercises
            .map((exercise) => exercise.duration)
            ?.reduce((prev, current) => prev + current) / 60,
        )
      : 0;
  };

  // React.useEffect(() => {
  //   const getServerData = async () => {
  //     const serverData = await fetch(url);
  //     return serverData;
  //   };

  //   getServerData()
  //     .then(async (res) => {
  //       const jsonData = await res.json();
  //       return jsonData;
  //     })
  //     .then((result: DataType) => {
  //       dispatch(setIsDataLoaded(true));
  //       setItems(result);
  //     })
  //     .catch((error: Error) => {
  //       dispatch(setIsDataLoaded(true));
  //       setError(true);

  //       reportError(error.message);
  //     });
  // }, []);

  React.useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `data/`))
      .then(async (snapshot) => {
        if (snapshot.exists()) {
          const serverData = await snapshot.val();
          setItems(serverData);
          dispatch(setIsDataLoaded(true));
        } else {
          alert("No data available");
        }
      })
      .catch((error) => {
        reportError(error);
      });
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
        <Route path="/main-page" element={<OverviewPage items={items} />} />

        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/log-in" element={<LogInPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
        <Route path="/change-email" element={<ChangeEmailPage />} />

        {/* <Route
          path="/main-page"
          element={<WorkoutPage elements={items} ifCompleted={completed} />}
        /> */}
        {/* <Route
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
        /> */}
        <Route path="/" element={<LoadingPage />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
