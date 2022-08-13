import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux-store/store";

import WelcomeImage from "../components/WorkoutPage/WelcomeImage";

import { DataType, WorkoutPartType } from "../globalTypes.js";
import introImg from "../assets/images/intro-img.png";

// import Profile from "../components/WorkoutPage/Profile";
import Headers from "../components/WorkoutPage/Headers";
import Container from "../components/WorkoutPage/Container";
import Button from "../components/Button";

import ItemsLoader from "../components/WorkoutPage/Skeletons/ItemsLoader";
import ImageLoader from "../components/WorkoutPage/Skeletons/ImageLoader";
import HeadersLoader from "../components/WorkoutPage/Skeletons/HeadersLoader";

type WorkoutPageType = {
  workout: WorkoutPartType | undefined;
};

const WorkoutPage: React.FC<WorkoutPageType> = ({ workout }) => {
  const isDataLoaded = useSelector(
    (state: RootState) => state.isDataLoaded.value,
  );

  return (
    <>
      {isDataLoaded ? (
        <>
          {/* <Profile /> */}
          <WelcomeImage src={introImg} />
          <Headers workoutTitle={`${workout?.name}`} daysAmount={1} />
          <Container sections={workout?.questions} />
          <Button
            link="/exercise"
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
