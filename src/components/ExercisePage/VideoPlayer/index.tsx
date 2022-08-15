import React from "react";
import { useDispatch } from "react-redux";
import { setIfPaused } from "../../../redux-store/slices/exerciseSlice";
import PauseInformer from "../PauseInformer";
import styles from "./VideoPlayer.module.scss";

type VideoPlayerType = {
  videoLink: string;
  ifPaused: boolean;
};

const VideoPlayer: React.FC<VideoPlayerType> = ({ videoLink, ifPaused }) => {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const dispatch = useDispatch();

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

  React.useEffect(() => {
    dispatch(setIfPaused(false));
  }, []);

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
