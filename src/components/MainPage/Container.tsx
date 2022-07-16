import React from "react";
import styles from "../../styles/MainPage/Container.module.scss";
import { IQuestion } from "../../interfaces";
import Section from "./Section";

type ContainerProps = {
  sections: IQuestion[] | undefined;
};

const Container: React.FC<ContainerProps> = ({ sections }) => {
  return (
    <div className={styles.container}>
      {sections?.map((section) => {
        return (
          <Section
            key={section.title}
            title={section.title}
            exercises={section.exercises}
            muscle_group={section.muscle_group}
          />
        );
      })}
    </div>
  );
};

export default Container;
