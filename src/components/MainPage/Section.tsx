import React from "react";
import "../../styles/MainPage/Section.scss";

import { IQuestion } from "../../interfaces";
import Exercise from "./Exercise";

const Section: React.FC<IQuestion> = ({ title, exercises, muscle_group }) => {
  return (
    <div>
      <hr className="section-line-separator" />
      <h2>{title}</h2>
      <div>{muscle_group.name}</div>
      <ul>
        {exercises.map((exercise) => {
          return (
            <Exercise
              key={exercise.id}
              title={exercise.title}
              duration={exercise.duration}
              photo={exercise.photo}
              className={exercise.finished ? "finished-exercise" : ""}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Section;
