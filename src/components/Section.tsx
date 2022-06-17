import React from "react";
import { IQuestion } from "../interfaces";
import Exercise from "./Exercise";

const Section: React.FC<IQuestion> = ({ title, exercises, muscle_group }) => {
  return (
    <div>
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
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Section;