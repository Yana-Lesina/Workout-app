import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux-store/store";

import WelcomeImage from "../components/MainPage/WelcomeImage";

import { DataType, WorkoutPartType } from "../globalTypes.js";
import introImg from "../assets/images/intro-img.png";

import Profile from "../components/MainPage/Profile";
import Headers from "../components/MainPage/Headers";
import Container from "../components/MainPage/Container";
import Button from "../components/Button";

import ItemsLoader from "../components/MainPage/Skeletons/ItemsLoader";
import ImageLoader from "../components/MainPage/Skeletons/ImageLoader";
import HeadersLoader from "../components/MainPage/Skeletons/HeadersLoader";

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
          <Profile />
          <WelcomeImage src={introImg} />
          <Headers
            workoutTitle={"Morning Flexibility Routine"}
            daysAmount={1}
          />
          <Container sections={workout?.questions} />
          <Button
            link="/exercise"
            innerText={workout?.ifCompleted ? "Resume" : "Start Workout"}
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
