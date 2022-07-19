import React from "react";
import styles from "../../styles/MainPage/Container.module.scss";
import { QuestionType } from "../../globalTypes";
import Section from "./Section";

type ContainerProps = {
  sections: QuestionType[] | undefined;
};

const Container: React.FC<ContainerProps> = ({ sections }) => {
  return (
    <>
      {sections?.map((section) => {
        return <Section key={section.title} {...section} />;
      })}
    </>
  );
};

export default Container;
