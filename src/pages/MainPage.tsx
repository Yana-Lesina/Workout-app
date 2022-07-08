import React from "react";
import "../styles/App.scss";
import WelcomeImage from "../components/MainPage/WelcomeImage";
import Headers from "../components/MainPage/Headers";
import Container from "../components/MainPage/Container";
import Button from "../components/Button";
import { IWorkoutPart } from "../interfaces";
import introImg from "../assets/images/intro-img.png";

type MainPageType = {
  elements: IWorkoutPart | undefined;
  ifCompleted: boolean;
};

const MainPage: React.FC<MainPageType> = ({ elements, ifCompleted }) => {
  return (
    <>
      <WelcomeImage src={introImg} />

      <Headers workoutTitle={"Morning Flexibility Routine"} daysAmount={1} />

      <Container sections={elements?.questions} />
      <Button
        styles="action-button"
        link="/exercise"
        innerText={ifCompleted ? "Resume" : "Start Workout"}
      />
    </>
  );
};

export default MainPage;
