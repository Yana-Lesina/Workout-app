import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux-store/store";

import WelcomeImage from "../components/WorkoutPage/WelcomeImage";

import { DataType, WorkoutPartType } from "../globalTypes.js";
import introImg from "../assets/images/intro-img.png";

// import Profile from "../components/WorkoutPage/Profile";
import Headers from "../components/WorkoutPage/Headers";
import Container from "../components/WorkoutPage/Container";
import Button from "../components/general/ActionButton";

import ItemsLoader from "../components/WorkoutPage/Skeletons/ItemsLoader";
import ImageLoader from "../components/WorkoutPage/Skeletons/ImageLoader";
import HeadersLoader from "../components/WorkoutPage/Skeletons/HeadersLoader";
import GoBackButton from "../components/general/GoBackButton";
import { setWorkout } from "../redux-store/slices/workoutSlice";

type WorkoutPageType = {
  // workout: WorkoutPartType | undefined;
};

const WorkoutPage: React.FC<WorkoutPageType> = () => {
  // const isDataLoaded = useSelector(
  //   (state: RootState) => state.isDataLoaded.value,
  // );
  const isDataLoaded = true;
  const workout = useSelector((state: RootState) => state.workout.workoutItem);

  // CHECK -------------------------------------
  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log("WORKOUT FROM WorkoutPage", workout);
  });

  return (
    <>
      {isDataLoaded ? (
        <>
          {/* <Profile /> */}
          <GoBackButton path={`/overview-page`} />
          <WelcomeImage src={introImg} />
          <Headers
            workoutTitle={`${workout?.name}`}
            daysAmount={1}
            duration={workout?.workoutDuration}
          />
          <Container sections={workout?.questions} />
          <Button
            link="/exercise-page"
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
