import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux-store/store";

import BackImg from "../assets/images/back-img.svg";
import ForwardImg from "../assets/images/forward-img.svg";
import ArrowButton from "../components/ExercisePage/ArrowButton";
import Timer from "../components/ExercisePage/Timer";
import PrepareImage from "../components/ExercisePage/PrepareImage";
import VideoPlayer from "../components/ExercisePage/VideoPlayer";
import VideoFooter from "../components/ExercisePage/VideoFooter";
import GoBackButton from "../components/general/GoBackButton";
import {
  setIfPaused,
  setIfPrepared,
} from "../redux-store/slices/exerciseSlice";
import {
  setCompletedWorkout,
  setExerciseState,
} from "../redux-store/slices/workoutSlice";
import WorkoutTitle from "../components/ExercisePage/WorkoutTitle";
import NavigationBlock from "../components/ExercisePage/NavigationBlock";
import ExerciseInner from "../components/ExercisePage/ExerciseInner";
import { useNavigate } from "react-router-dom";

type ExercisePageType = {
  // exercises: ExerciseType[] | undefined;
  // setExerciseState: any;
  // setCompletedState: any;
};

const ExercisePage: React.FC<ExercisePageType> = () => {
  const workout = useSelector((state: RootState) => state.workout.workoutItem);
  const startCounter = workout.startCounter;
  const exercises = workout.exerciseList;

  const ifPrepared = useSelector(
    (state: RootState) => state.exercise.ifPrepared,
  );
  const ifPaused = useSelector((state: RootState) => state.exercise.ifPaused);
  const isWorkoutCompleted = workout.isWorkoutCompleted;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [counter, setCounter] = React.useState<number>(startCounter!);

  dispatch(setExerciseState(0));
  console.log("WORKOUT FROM EXERCISE PAGE", workout);

  const switchToGetReady = (direction: -1 | 1) => {
    if (
      (counter === 0 && direction === 1) ||
      (counter > 0 && counter + 1 < exercises!.length) ||
      (counter + 1 === exercises!.length && direction === -1)
    ) {
      setCounter(counter + 1 * direction);
    }
    // setDuration(5);
    dispatch(setIfPrepared(false));
    dispatch(setIfPaused(false));
  };

  const autoSwitch = () => {
    if (exercises!.length > counter + 1) {
      // get ready -> exercise
      if (!ifPrepared) {
        dispatch(setIfPrepared(true));
      }
      // exercise -> get ready
      if (ifPrepared) {
        dispatch(setExerciseState(counter));
        switchToGetReady(1);
      }
      // last exercise -> Workout Completed!
    } else if (exercises!.length === counter + 1) {
      dispatch(setExerciseState(counter));
      dispatch(setCompletedWorkout());
    }
  };

  React.useEffect(() => {
    if (isWorkoutCompleted) {
      navigate("/workout-completed");
    }
  }, [isWorkoutCompleted]);

  return (
    <>
      <GoBackButton path={`/workout/:${workout.name}`} />

      <WorkoutTitle
        preparationTitle="Get Ready"
        exerciseTitle={exercises[counter].title}
      />

      <NavigationBlock>
        <ArrowButton
          imgLink={BackImg}
          onClick={() => switchToGetReady(-1)}
          isExtremeElement={counter === 0 && !ifPrepared}
        />

        <Timer
          duration={!ifPrepared ? 5 : exercises[counter].duration}
          ifPaused={ifPaused}
          isPrepared={ifPrepared}
          handleRunOut={autoSwitch}
          switchHandler={counter}
        />

        <ArrowButton
          imgLink={ForwardImg}
          onClick={
            !ifPrepared
              ? () => dispatch(setIfPrepared(true))
              : () => {
                  if (counter + 1 === exercises.length) {
                    dispatch(setExerciseState(counter));
                    dispatch(setCompletedWorkout());
                    return;
                  }
                  dispatch(setExerciseState(counter));
                  switchToGetReady(1);
                }
          }
        />
      </NavigationBlock>

      <ExerciseInner>
        {!ifPrepared ? (
          <PrepareImage photo={exercises[counter].photo} />
        ) : (
          <>
            <VideoPlayer
              videoLink={exercises[counter].video}
              ifPaused={ifPaused}
            />
            <VideoFooter
              ifPaused={ifPaused}
              onClick={() => {
                dispatch(setIfPaused(!ifPaused));
              }}
              onKeyPress={(event: React.KeyboardEvent<HTMLElement>) => {
                if (event.key === " " || event.key === "Enter") {
                  dispatch(setIfPaused(!ifPaused));
                }
              }}
            />
          </>
        )}
      </ExerciseInner>
    </>
  );
};
export default ExercisePage;
