import React from "react";
import styles from "./AppRoutes.module.scss";
import { Routes, Route, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "../../redux-store/store";

import { checkUser } from "../../firebase/authFuncs";

import SignUpPage from "../../pages/AuthPages/SignUpPage";
import LogInPage from "../../pages/AuthPages/LogInPage";
import ResetPasswordPage from "../../pages/AuthPages/ResetPasswordPage";
import ErrorPage from "../../pages/ErrorPage";
import OverviewPage from "../../pages/OverviewPage";
import ChangePasswordPage from "../../pages/AuthPages/ChangePasswordPage";
import ChangeEmailPage from "../../pages/AuthPages/ChangeEmailPage";
import LoadingPage from "../../pages/LoadingPage";
import WorkoutPage from "../../pages/WorkoutPage";
import ExercisePage from "../../pages/ExercisePage";
import WorkoutCompleted from "../../pages/WorkoutCompleted";

const AppRoutes = () => {
  const ifAuthorized = useSelector((state: RootState) => state.user.uid);
  const ifWelcomePageLoaded = useSelector(
    (state: RootState) => state.loaders.ifWelcomePageLoaded,
  );

  console.log("AppRoutes render");

  React.useEffect(() => {
    console.log("ifAuthorized", Boolean(ifAuthorized));
    checkUser();
  }, [ifAuthorized]);

  return ifWelcomePageLoaded ? (
    <div className={styles.wrapper}>
      <Routes>
        {!ifAuthorized
          ? [
              <Route key="signUp" path="/sign-up" element={<SignUpPage />} />,
              <Route key="logIn" path="/log-in" element={<LogInPage />} />,
              <Route
                key="resetPassword"
                path="/reset-password"
                element={<ResetPasswordPage />}
              />,
              <Route
                key="logIn_redirect"
                path="*"
                element={<Navigate to="/log-in" />}
              />,
              // <Route
              //   key="noAth_ErrorPage"
              //   path="/error-page"
              //   element={<ErrorPage />}
              // />,
            ]
          : [
              <Route
                key="overview"
                path="/overview-page"
                element={<OverviewPage />}
              />,
              <Route
                key="changePassword"
                path="/change-password"
                element={<ChangePasswordPage />}
              />,
              <Route
                key="changeEmail"
                path="/change-email"
                element={<ChangeEmailPage />}
              />,
              <Route
                key="overviewPage_redirect"
                path="*"
                element={<Navigate to="/overview-page" />}
              />,
              <Route key="workoutPage" path="workout/:name">
                <Route
                  key="exercisePage"
                  path="exercise-page"
                  element={<ExercisePage />}
                />
                <Route key="exercisePage" index element={<WorkoutPage />} />
              </Route>,

              <Route
                key="workoutCompleted"
                path="/workout-completed"
                element={<WorkoutCompleted />}
              />,
            ]}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  ) : (
    <div className={styles.wrapper}>
      <LoadingPage />
    </div>
  );
};

export default AppRoutes;
