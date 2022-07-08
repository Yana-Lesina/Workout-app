import React from "react";
import "../../styles/MainPage/WelcomeImage.scss";

type WelcomeImageType = {
  src: string;
};

const WelcomeImage: React.FC<WelcomeImageType> = ({ src }) => {
  return (
    <div className="img-container">
      <img src={src} alt="intro-img" className="intro-img" />
    </div>
  );
};

export default WelcomeImage;
