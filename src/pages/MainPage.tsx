import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux-store/store";

import WelcomeImage from "../components/MainPage/WelcomeImage";

import { WorkoutPartType } from "../globalTypes.js";
import introImg from "../assets/images/intro-img.png";

import UserProfile from "../components/MainPage/UserProfile";
import Headers from "../components/MainPage/Headers";
import Container from "../components/MainPage/Container";
import Button from "../components/Button";

import ItemsLoader from "../components/MainPage/Skeletons/ItemsLoader";
import ImageLoader from "../components/MainPage/Skeletons/ImageLoader";
import HeadersLoader from "../components/MainPage/Skeletons/HeadersLoader";

type MainPageType = {
  elements: WorkoutPartType | undefined;
  ifCompleted: boolean;
};

const MainPage: React.FC<MainPageType> = ({ elements, ifCompleted }) => {
  const isDataLoaded = useSelector(
    (state: RootState) => state.isDataLoaded.value,
  );

  return (
    <>
      {isDataLoaded ? (
        <>
          <UserProfile />
          <WelcomeImage src={introImg} />
          <Headers
            workoutTitle={"Morning Flexibility Routine"}
            daysAmount={1}
          />
          <Container sections={elements?.questions} />
          <Button
            link="/exercise"
            innerText={ifCompleted ? "Resume" : "Start Workout"}
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

export default MainPage;
