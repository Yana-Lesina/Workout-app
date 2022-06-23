import React from "react";
import Timer from "./Timer";
import BackImg from "../images/back-img.svg";
import ForwardImg from "../images/forward-img.svg";

type ExerciseInnerType = {
  title: string;
  time: number;
  duration: number;
  photo: string;
  videoLink: string;
};

const ExerciseInner: React.FC<ExerciseInnerType> = ({
  title,
  time,
  duration,
  photo,
  videoLink,
}) => {
  return (
    <>
      <h2 className="current-exercise-title">{title}</h2>

      <div className="timer-wrapper">
        <div className="back-button">
          <img src={BackImg} alt="back-img" className="back-img" />
        </div>
        <Timer className={"exercise-timer"} time={time} duration={duration} />
        <div className="forward-button">
          <img src={ForwardImg} alt="forward-img" className="forward-img" />
        </div>
      </div>

      <div>
        <video
          id="video-player"
          controls
          autoPlay
          loop
          poster={photo}
          src={videoLink}
        ></video>
      </div>
    </>
  );
};

export default ExerciseInner;
