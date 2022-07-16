import React from "react";
import "../styles/App.scss";
import WelcomeImage from "../components/MainPage/WelcomeImage";
import Headers from "../components/MainPage/Headers";
import Container from "../components/MainPage/Container";
import Button from "../components/Button";
import { IWorkoutPart } from "../interfaces";
import introImg from "../assets/images/intro-img.png";
import ItemsLoader from "../components/MainPage/Skeletons/ItemsLoader";
import ImageLoader from "../components/MainPage/Skeletons/ImageLoader";
import HeadersLoader from "../components/MainPage/Skeletons/HeadersLoader";

type MainPageType = {
  elements: IWorkoutPart | undefined;
  ifCompleted: boolean;
  isLoaded: boolean;
};

const MainPage: React.FC<MainPageType> = ({
  elements,
  ifCompleted,
  isLoaded,
}) => {
  return (
    <>
      {isLoaded ? (
        <>
          <WelcomeImage src={introImg} />
          <Headers
            workoutTitle={"Morning Flexibility Routine"}
            daysAmount={1}
          />
          <Container sections={elements?.questions} />
          <Button
            styles="action-button"
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
