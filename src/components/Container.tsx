import React from "react";
import { IQuestion } from "../interfaces";

type ContainerProps = {
  sections: IQuestion[] | undefined;
};

const Container: React.FC<ContainerProps> = ({ sections }) => {
  return (
    <ul>
      {sections?.map((section) => {
        return <li>{section.title}</li>;
      })}
    </ul>
  );
};

export default Container;
