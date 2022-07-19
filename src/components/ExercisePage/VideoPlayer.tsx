import React from "react";
import PauseInformer from "./PauseInformer";
import styles from "../../styles/ExercisePage/VideoPlayer.module.scss";

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

  React.useEffect(() => {
    if (
      videoRef.current!.currentTime > 0 &&
      !videoRef.current!.paused &&
      !videoRef.current!.ended &&
      videoRef.current!.readyState > videoRef.current!.HAVE_CURRENT_DATA
    ) {
      videoRef.current!.play();
    }
  }, []);

  return (
    <>
      {ifPaused && <PauseInformer />}

      <video
        className={styles.videoPlayer}
        ref={videoRef}
        loop
        src={videoLink}
      />
    </>
  );
};

export default VideoPlayer;
