import "../App.css";
import React from "react";
import introImg from "../images/intro-img.png";
import Container from "../components/Container";
import StartButton from "../components/Button";
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
      <div className="headers-container">
        <h4>Day 1</h4>
        <h2>Morning Flexibility Routine</h2>
        <h6>Easy 15 min no equipment</h6>
      </div>

      <Container sections={elements?.questions} />
      <StartButton
        styles="action-button"
        link="/exercise"
        innerText="Start Workout"
      />
    </>
  );
};

export default MainPage;
