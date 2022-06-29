import React, { useEffect, useRef } from "react";
import Timer from "./Timer";
import BackImg from "../images/back-img.svg";
import ForwardImg from "../images/forward-img.svg";
import ArrowButton from "./ArrowButton";
import PlayImg from "../images/play.svg";
import PauseImg from "../images/pause.svg";

type ExerciseInnerType = {
  title: string;
  time: number;
  duration: number;
  photo: string;
  videoLink: string;
  ifPlaying: boolean;
  onClick: any;
};

const ExerciseInner: React.FC<ExerciseInnerType> = ({
  title,
  time,
  duration,
  photo,
  videoLink,
  ifPlaying,
  onClick,
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
    handleVideoPlay();
  }, [ifPlaying]);

  return (
    <>
      <h2 className="current-exercise-title">{title}</h2>

      <div className="timer-wrapper">
        <ArrowButton imgLink={BackImg} />
        <Timer className={"exercise-timer"} time={time} duration={duration} />
        <ArrowButton imgLink={ForwardImg} />
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
      <footer>
        {ifPlaying ? (
          <img src={PauseImg} alt="PauseImg" onClick={onClick} />
        ) : (
          <img src={PlayImg} alt="PlayImg" onClick={onClick} />
        )}
      </footer>
    </>
  );
};

export default ExerciseInner;
