import React from "react";
import styles from "../../styles/MainPage/Section.module.scss";
import { IQuestion } from "../../interfaces";
import Exercise from "./Exercise";

const Section: React.FC<IQuestion> = ({ title, exercises, muscle_group }) => {
  return (
    <div>
      <hr className={styles.sectionLineSeparator} />
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.musclegroupTitle}>{muscle_group.name}</div>
      <ul>
        {exercises.map((exercise) => {
          return (
            <Exercise
              key={exercise.id}
              title={exercise.title}
              duration={exercise.duration}
              photo={exercise.photo}
              isFinished={exercise.finished}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Section;
