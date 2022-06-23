import React from "react";
import Timer from "./Timer";
import BackImg from "../images/back-img.svg";
import ForwardImg from "../images/forward-img.svg";

type PreparationInnerType = {
  time: number;
  duration: number;
  photo: string;
};

const PreparationInner: React.FC<PreparationInnerType> = ({
  time,
  duration,
  photo,
}) => {
  return (
    <>
      <h2 className="get-ready-title">Get Ready</h2>

      <div className="timer-wrapper">
        <div className="back-button">
          <img src={BackImg} alt="back-img" className="back-img" />
        </div>
        <Timer className="get-ready-timer" time={time} duration={duration} />
        <div className="forward-button">
          <img src={ForwardImg} alt="forward-img" className="forward-img" />
        </div>
      </div>

      <div className="preview-img-container">
        <img src={photo} alt="preview image" className="preview-img" />
      </div>
    </>
  );
};

export default PreparationInner;
