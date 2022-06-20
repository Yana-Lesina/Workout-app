import React from "react";
import Timer from "./Timer";

type ExerciseInnerType = {
  title: string;
  time: number;
  photo: string;
  videoLink: string;
};

const ExerciseInner: React.FC<ExerciseInnerType> = ({
  title,
  time,
  photo,
  videoLink,
}) => {
  return (
    <>
      <h2>{title}</h2>
      <Timer className={"get-ready-timer"} time={time} />

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
