import React from "react";

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
      <div className="timer get-ready-timer">{time}</div>
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
