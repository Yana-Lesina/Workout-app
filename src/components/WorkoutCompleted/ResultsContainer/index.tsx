import React from "react";
import styles from "./ResultsContainer.module.scss";

type ResultsContainerType = {
  children: JSX.Element | JSX.Element[];
};

const ResultsContainer: React.FC<ResultsContainerType> = ({ children }) => {
  return <div className="result-message-box">{children}</div>;
};

export default ResultsContainer;
