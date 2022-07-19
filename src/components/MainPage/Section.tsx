import React from "react";
import styles from "../../styles/MainPage/Section.module.scss";
import { QuestionType } from "../../globalTypes";
import Exercise from "./Exercise";

const Section: React.FC<QuestionType> = ({ title, exercises, muscleGroup }) => {
  return (
    <div className={styles.sectionWrapper}>
      <hr className={styles.sectionLineSeparator} />
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.musclegroupTitle}>{muscleGroup?.name}</div>
      <ul>
        {exercises.map((exercise) => {
          return <Exercise key={exercise.id} {...exercise} />;
        })}
      </ul>
    </div>
  );
};

export default Section;
