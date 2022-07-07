import React from "react";
import Timer from "./Timer";
import BackImg from "../assets/images/back-img.svg";
import ForwardImg from "../assets/images/forward-img.svg";
import ArrowButton from "./ArrowButton";

type PreparationInnerType = {
  time: number;
  duration: number;
  photo: string;
  switchToPage: any;
};

const PreparationInner: React.FC<PreparationInnerType> = ({
  time,
  duration,
  photo,
  switchToPage,
}) => {
  return (
    <>
      {/* <h2 className="get-ready-title">Get Ready</h2>

      <div className="timer-wrapper">
        <ArrowButton imgLink={BackImg} onClick={switchToPage} />
        <Timer className="get-ready-timer" time={time} duration={duration} />
        <ArrowButton imgLink={ForwardImg} onClick={switchToPage} />
      </div>

      <div className="preview-img-container">
        <img src={photo} alt="preview image" className="preview-img" />
      </div> */}
    </>
  );
};

export default PreparationInner;
