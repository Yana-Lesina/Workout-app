import React from "react";
import styles from "../styles/ExercisePage/ExercisePage.module.scss";

import { IExercise } from "../interfaces";
import BackImg from "../assets/images/back-img.svg";
import ForwardImg from "../assets/images/forward-img.svg";
import ArrowButton from "../components/ExercisePage/ArrowButton";
import Timer from "../components/ExercisePage/Timer";
import PrepareImage from "../components/ExercisePage/PrepareImage";
import VideoPlayer from "../components/ExercisePage/VideoPlayer";
import VideoFooter from "../components/ExercisePage/VideoFooter";
import ToHomepageButton from "../components/ExercisePage/ToHomepageButton";

type ExercisePageType = {
  exercises: IExercise[];
  startCounter: number;
  setExerciseState: any;
  setCompletedState: any;
};

const ExercisePage: React.FC<ExercisePageType> = ({
  exercises,
  startCounter,
  setExerciseState,
  setCompletedState,
}) => {
  const [prepared, setPrepared] = React.useState<boolean>(false);
  const [counter, setCounter] = React.useState<number>(startCounter);
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

  const autoSwitch = () => {
    if (exercises.length > counter + 1) {
      // get ready -> exercise
      if (!prepared) {
        switchToExercise();
      }
      // exercise -> get ready
      if (prepared) {
        setExerciseState(counter);
        switchToGetReady(1);
      }
      // last exercise -> Workout Completed!
    } else if (exercises.length === counter + 1) {
      setExerciseState(counter);
      setCompletedState(true);
    }
  };

  return (
    <>
      <ToHomepageButton />

      <h2
        className={`${styles.currentExerciseTitle} ${
          exercises[counter]?.finished && prepared
            ? styles.finishedExerciseClue
            : " "
        }`}
      >
        {!prepared ? "Get ready" : exercises[counter].title}
      </h2>

      <div className={styles.timerWrapper}>
        <ArrowButton
          imgLink={BackImg}
          onClick={
            !prepared
              ? () => {
                  switchToGetReady(-1);
                }
              : () => switchToGetReady(-1)
          }
          isExtremeElement={counter === 0 && !prepared}
        />

        <Timer
          duration={!prepared ? 5 : exercises[counter].duration}
          ifPaused={ifPaused}
          isPrepared={prepared}
          handleRunOut={autoSwitch}
        />

        <ArrowButton
          imgLink={ForwardImg}
          onClick={
            !prepared
              ? () => switchToExercise()
              : () => {
                  if (counter + 1 === exercises.length) {
                    setExerciseState(counter);
                    setCompletedState(true);
                    return;
                  }
                  setExerciseState(counter);
                  switchToGetReady(1);
                }
          }
        />
      </div>
      <div className={styles.exerciseInner}>
        {!prepared ? (
          <PrepareImage photo={exercises[counter]?.photo} />
        ) : (
          <>
            <VideoPlayer
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
  );
};
export default ExercisePage;
