import React from "react";
import styles from "./WorkoutTitle.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux-store/store";

type WorkoutTitle = {
  preparationTitle: string;
  exerciseTitle: string;
};

const WorkoutTitle: React.FC<WorkoutTitle> = ({
  preparationTitle,
  exerciseTitle,
}) => {
  const ifPrepared = useSelector(
    (state: RootState) => state.exercise.ifPrepared,
  );

  return (
    <h2 className={`${styles.currentExerciseTitle}`}>
      {!ifPrepared ? preparationTitle : exerciseTitle}
    </h2>
  );
};

export default WorkoutTitle;
