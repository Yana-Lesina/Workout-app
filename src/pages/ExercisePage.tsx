import "../styles/App.scss";
import React from "react";

import { IExercise } from "../interfaces";
import { WorkoutCompleted } from "../components/WorkoutCompleted";
import BackImg from "../assets/images/back-img.svg";
import ForwardImg from "../assets/images/forward-img.svg";
import goToHomepage from "../assets/images/goToHomepage.svg";
import ArrowButton from "../components/ArrowButton";
import Timer from "../components/Timer";
import PrepareImage from "../components/PrepareImage";
import ExerciseVideo from "../components/ExerciseVideo";
import VideoFooter from "../components/VideoFooter";
import { Link } from "react-router-dom";

// repeat type for MainPageType
// if nothing changes - create 1 Interface
type ExercisePageType = {
  exercises: IExercise[];
};

const ExercisePage: React.FC<ExercisePageType> = ({ exercises }) => {
  const [prepared, setPrepared] = React.useState<boolean>(false);
  const [completed, setCompleted] = React.useState<boolean>(false);
  const [counter, setCounter] = React.useState<number>(0);
  const [ifPaused, setIfPaused] = React.useState(false);

  const switchToExercise = () => {
    setPrepared(true);
  };

  const switchToGetReady = (direction: -1 | 1) => {
    if (
      (counter === 0 && direction === 1) ||
      (counter > 0 && counter + 1 < exercises.length) ||
      (counter + 1 === exercises.length && direction === -1)
    ) {
      setCounter(counter + 1 * direction);
    }
    setPrepared(false);
    setIfPaused(false);
  };

  const switchFunc = () => {
    if (exercises.length > counter + 1) {
      // get ready -> exercise
      if (!prepared) {
        switchToExercise();
      }
      // exercise -> get ready
      if (prepared) {
        switchToGetReady(1);
      }
      // last exercise -> Workout Completed!
    } else if (exercises.length === counter + 1) {
      setCompleted(true);
    }
  };

  return (
    <>
      {completed ? (
        <WorkoutCompleted totalDuration={0} />
      ) : (
        <>
          <Link to="/">
            <div className="goToHomepage-button">
              <img src={goToHomepage} alt="goToHomepage" />
            </div>
          </Link>

          <h2 className="current-exercise-title">
            {!prepared ? "Get ready" : exercises[counter].title}
          </h2>

          <div className="timer-wrapper">
            <ArrowButton
              imgLink={BackImg}
              onClick={
                !prepared
                  ? () => switchToExercise()
                  : () => switchToGetReady(-1)
              }
              className={counter === 0 && !prepared ? "extreme-element" : ""}
            />

            <Timer
              className={!prepared ? "get-ready-timer" : "exercise-timer"}
              duration={!prepared ? 5 : exercises[counter].duration}
              ifPaused={ifPaused}
              switchFunc={switchFunc}
            />

            <ArrowButton
              imgLink={ForwardImg}
              onClick={
                !prepared ? () => switchToExercise() : () => switchToGetReady(1)
              }
              className={
                counter + 1 === exercises.length && prepared
                  ? "extreme-element"
                  : ""
              }
            />
          </div>
          <div className="exercise-inner">
            {!prepared ? (
              <PrepareImage photo={exercises[counter]?.photo} />
            ) : (
              <>
                <ExerciseVideo
                  photo={exercises[counter].photo}
                  videoLink={exercises[counter].video}
                  ifPaused={ifPaused}
                />
                <VideoFooter
                  ifPaused={ifPaused}
                  onClick={() => {
                    setIfPaused(!ifPaused);
                  }}
                  onKeyPress={(event: any) => {
                    if (event.key === " " || event.key === "Enter") {
                      setIfPaused(!ifPaused);
                    }
                  }}
                />
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ExercisePage;
