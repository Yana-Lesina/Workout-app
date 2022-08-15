import React from "react";
import styles from "./CardsWrapper.module.scss";

type CardsWrapperType = {
  children: JSX.Element | JSX.Element[];
};

const CardsWrapper: React.FC<CardsWrapperType> = ({ children }) => {
  return <div className={styles.cardsWrapper}>{children}</div>;
};

export default CardsWrapper;
