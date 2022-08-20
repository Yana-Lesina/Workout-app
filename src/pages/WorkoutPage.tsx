import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux-store/store";

import WelcomeImage from "../components/WorkoutPage/WelcomeImage";

import introImg from "src/assets/images/intro-img.png";

import Headers from "../components/WorkoutPage/Headers";

import Button from "../components/general/ActionButton";

import ItemsLoader from "../components/WorkoutPage/Skeletons/ItemsLoader";
import ImageLoader from "../components/WorkoutPage/Skeletons/ImageLoader";
import HeadersLoader from "../components/WorkoutPage/Skeletons/HeadersLoader";
import GoBackButton from "../components/general/GoBackButton";

import Section from "../components/WorkoutPage/Section";
import { getTheWorkout } from "src/firebase/databaseFuncs";
import { useLocation } from "react-router-dom";

interface CustomizedState {
  id: number;
}

const WorkoutPage: React.FC = () => {
  const ifWorkoutPageLoaded = useSelector(
    (state: RootState) => state.loaders.ifWorkoutPageLoaded,
  );

  const workout = useSelector((state: RootState) => state.workout.workoutItem);

  const location = useLocation();
  const state = location.state as CustomizedState;

  React.useEffect(() => {
    getTheWorkout(state.id);

    console.log("workoutID", state.id);
  }, []);

  return (
    <>
      {ifWorkoutPageLoaded ? (
        <>
          {/* <Profile /> */}
          <GoBackButton path={`/overview-page`} />
          <WelcomeImage src={introImg} />
          <Headers
            workoutTitle={`${workout?.name}`}
            daysAmount={1}
            duration={workout?.workoutDuration}
          />
          {workout?.questions?.map((section) => {
            return <Section key={section.title} {...section} />;
          })}
          <Button
            link={`exercise-page`}
            innerText={workout?.isWorkoutCompleted ? "Resume" : "Start Workout"}
          />
        </>
      ) : (
        <>
          <ImageLoader />
          <HeadersLoader />
          {[...new Array(5)].map((_, id) => {
            return <ItemsLoader key={id} />;
          })}
        </>
      )}
    </>
  );
};

export default WorkoutPage;
