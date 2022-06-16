import "../App.css";
import React from "react";
import introImg from "../images/intro-img.png";
import Container from "../components/Container";
import StartButton from "../components/StartButton";
import { IWorkoutPart } from "../interfaces";

type MainPageType = {
  elements: IWorkoutPart | undefined;
};

const MainPage: React.FC<MainPageType> = ({ elements }) => {
  return (
    <>
      <div className="img-container">
        <img src={introImg} alt="intro-img" className="intro-img" />
      </div>
      <h4>Day 1</h4>
      <h1>Morning Flexibility Routine</h1>
      <h6>Easy 15 min no equipment</h6>
      <Container sections={elements?.questions} />
      <StartButton />
    </>
  );
};

export default MainPage;
