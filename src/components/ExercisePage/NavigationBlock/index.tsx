import React from "react";
import styles from "./NavigationBlock.module.scss";

type NavigationBlockType = {
  children: JSX.Element | JSX.Element[];
};

const NavigationBlock: React.FC<NavigationBlockType> = ({ children }) => {
  return <div className={styles.timerWrapper}>{children}</div>;
};

export default NavigationBlock;
