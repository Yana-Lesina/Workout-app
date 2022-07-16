import React from "react";
import ContentLoader from "react-content-loader";
import styles from "../../../styles/MainPage/Exercise.module.scss";

const ItemsLoader = () => (
  <ContentLoader
    className={styles.exerciseContainer}
    speed={2}
    width={800}
    height={132}
    viewBox="0 0 800 132"
    backgroundColor="#f1d7f4" //"#d362d5"
    foregroundColor="#ecebeb" //"#1ad5c0"
  >
    <rect x="0" y="0" rx="10" ry="10" width="128" height="128" />
    <rect x="153" y="37" rx="5" ry="5" width="190" height="20" />
    <rect x="153" y="76" rx="5" ry="5" width="78" height="19" />
  </ContentLoader>
);

export default ItemsLoader;
