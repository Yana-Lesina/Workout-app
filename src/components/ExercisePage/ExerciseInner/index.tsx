import React from "react";
import styles from "./ExerciseInner.module.scss";

type ExerciseInnerType = {
  children: JSX.Element | JSX.Element[];
};

const ExerciseInner: React.FC<ExerciseInnerType> = ({ children }) => {
  return <div className={styles.exerciseInner}>{children}</div>;
};

export default ExerciseInner;
