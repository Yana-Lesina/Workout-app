import React from "react";
import { IQuestion } from "../interfaces";
import Exercise from "./Exercise";

const Section: React.FC<IQuestion> = ({ title, exercises, muscle_group }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {exercises.map((exercise) => {
          return (
            <Exercise
              title={exercise.title}
              duration={exercise.duration}
              photo={exercise.photo}
            />
          );
        })}
      </ul>
      <div>{muscle_group.name}</div>
    </div>
  );
};

export default Section;
