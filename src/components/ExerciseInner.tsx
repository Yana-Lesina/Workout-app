import React, { useEffect, useRef } from "react";
import Timer from "./Timer";
import BackImg from "../assets/images/back-img.svg";
import ForwardImg from "../assets/images/forward-img.svg";
import ArrowButton from "./ArrowButton";
import PlayImg from "../assets/images/play.svg";
import PauseImg from "../assets/images/pause.svg";

type ExerciseInnerType = {
  title: string;
  time: number;
  duration: number;
  photo: string;
  videoLink: string;

  onClick: any;
  switchToPage: any;
};

const ExerciseInner: React.FC<ExerciseInnerType> = ({
  title,
  time,
  duration,
  photo,
  videoLink,
  onClick,
  switchToPage,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ifPaused, setIfPaused] = React.useState(true);

  const handleVideoPlay = () => {
    if (ifPaused && videoRef.current !== null) {
      videoRef.current.play();
    } else if (!ifPaused && videoRef.current !== null) {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    handleVideoPlay();
  }, [ifPaused]);

  return (
    <>
      <h2 className="current-exercise-title">{title}</h2>

      <div className="timer-wrapper">
        <ArrowButton
          imgLink={BackImg}
          onClick={() => {
            switchToPage;
          }}
        />
        <Timer className={"exercise-timer"} time={time} duration={duration} />
        <ArrowButton imgLink={ForwardImg} onClick={switchToPage} />
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
        {ifPaused ? (
          <img src={PauseImg} alt="PauseImg" onClick={onClick} />
        ) : (
          <img src={PlayImg} alt="PlayImg" onClick={onClick} />
        )}
      </footer>
    </>
  );
};

export default ExerciseInner;
