import React from "react";
import styles from "./ResultsContainer.module.scss";

type ResultsContainerType = {
  children: JSX.Element | JSX.Element[];
};

const ResultsContainer: React.FC<ResultsContainerType> = ({ children }) => {
  return <div className={styles.resultMessageBox}>{children}</div>;
};

export default ResultsContainer;
