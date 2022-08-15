import React from "react";
import ContentLoader from "react-content-loader";
import styles from "../Headers/Headers.module.scss";

const HeadersLoader = () => (
  <ContentLoader
    className={styles.headersContainer}
    speed={2}
    width={800}
    height={132}
    viewBox="0 0 800 132"
    backgroundColor="#f1d7f4"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="57" rx="5" ry="5" width="246" height="29" />
    <rect x="0" y="25" rx="5" ry="5" width="84" height="23" />
    <rect x="0" y="97" rx="5" ry="5" width="143" height="14" />
  </ContentLoader>
);

export default HeadersLoader;
