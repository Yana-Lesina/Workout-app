import React from "react";
import Timer from "./Timer";
import BackImg from "../images/back-img.svg";
import ForwardImg from "../images/forward-img.svg";
import ArrowButton from "./ArrowButton";

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
        <ArrowButton imgLink={BackImg} />
        <Timer className="get-ready-timer" time={time} duration={duration} />
        <ArrowButton imgLink={ForwardImg} />
      </div>

      <div className="preview-img-container">
        <img src={photo} alt="preview image" className="preview-img" />
      </div>
    </>
  );
};

export default PreparationInner;
