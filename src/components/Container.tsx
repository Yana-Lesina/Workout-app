import React from "react";
import { IQuestion } from "../interfaces";
import Section from "./Section";

type ContainerProps = {
  sections: IQuestion[] | undefined;
};

const Container: React.FC<ContainerProps> = ({ sections }) => {
  return (
    <ul>
      {sections?.map((section) => {
        return (
          <Section
            title={section.title}
            exercises={section.exercises}
            muscle_group={section.muscle_group}
          />
        );
      })}
    </ul>
  );
};

export default Container;
