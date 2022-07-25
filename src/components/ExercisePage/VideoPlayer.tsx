import React from "react";
import PauseInformer from "./PauseInformer";
import styles from "../../styles/ExercisePage/VideoPlayer.module.scss";

type VideoPlayerType = {
  videoLink: string;
  ifPaused: boolean;
};

const VideoPlayer: React.FC<VideoPlayerType> = ({ videoLink, ifPaused }) => {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  const handleVideoPlay = () => {
    if (!ifPaused && videoRef !== null) {
      videoRef.current?.play();
    } else if (ifPaused && videoRef !== null) {
      videoRef.current?.pause();
    }
  };

  React.useEffect(() => {
    handleVideoPlay();
  }, [ifPaused]);

  return (
    <>
      {ifPaused && <PauseInformer />}

      <video
        className={styles.videoPlayer}
        ref={videoRef}
        loop
        autoPlay
        src={videoLink}
      />
    </>
  );
};

export default VideoPlayer;
