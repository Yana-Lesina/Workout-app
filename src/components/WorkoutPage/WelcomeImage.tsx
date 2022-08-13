import React from "react";
import styles from "../../styles/MainPage/WelcomeImage.module.scss";

type WelcomeImageType = {
  src: string;
};

const WelcomeImage: React.FC<WelcomeImageType> = ({ src }) => {
  return (
    <div className={styles.imgContainer}>
      <img
        src={src}
        alt="intro-img"
        className={styles.introImg}
        width="52vw"
        height="29.25vw"
      />
    </div>
  );
};

export default WelcomeImage;
