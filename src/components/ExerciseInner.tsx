import React, { useEffect, useRef } from "react";
import Timer from "./Timer";
import BackImg from "../images/back-img.svg";
import ForwardImg from "../images/forward-img.svg";

type ExerciseInnerType = {
  title: string;
  time: number;
  duration: number;
  photo: string;
  videoLink: string;
  ifPlaying: boolean;
};

const ExerciseInner: React.FC<ExerciseInnerType> = ({
  title,
  time,
  duration,
  photo,
  videoLink,
  ifPlaying,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const handleVideoPlay = () => {
    if (ifPlaying && videoRef.current !== null) {
      videoRef.current?.play();
    } else if (!ifPlaying && videoRef.current !== null) {
      videoRef.current?.pause();
    }
  };

  useEffect(() => {
    console.log("handleVideoPlay");
    handleVideoPlay();
  }, [ifPlaying]);

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
          ref={videoRef}
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
