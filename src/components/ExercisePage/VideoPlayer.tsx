import React from "react";
import PauseInformer from "./PauseInformer";
import "../../styles/ExercisePage/VideoPlayer.scss";

type VideoPlayerType = {
  videoLink: string;
  ifPaused: boolean;
};

const VideoPlayer: React.FC<VideoPlayerType> = ({ videoLink, ifPaused }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleVideoPlay = () => {
    if (!ifPaused && videoRef.current !== null) {
      videoRef.current.play();
    } else if (ifPaused && videoRef.current !== null) {
      videoRef.current.pause();
    }
  };

  React.useEffect(() => {
    handleVideoPlay();
  }, [ifPaused]);

  return (
    <>
      {ifPaused && <PauseInformer />}

      <video id="video-player" ref={videoRef} autoPlay loop src={videoLink} />
    </>
  );
};

export default VideoPlayer;
