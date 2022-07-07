import React from "react";
import PauseInformer from "./PauseInformer";

type ExerciseVideoType = {
  photo: string;
  videoLink: string;
  ifPaused: boolean;
};

const ExerciseVideo: React.FC<ExerciseVideoType> = ({
  photo,
  videoLink,
  ifPaused,
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  // async function playVid() {
  //   if (video.paused && !isPlaying) {
  //     return video.play();
  //   }
  // }

  // // Pause video function
  // function pauseVid() {
  //   if (!video.paused && isPlaying) {
  //     video.pause();
  //   }
  // }

  const handleVideoPlay = () => {
    if (!ifPaused && videoRef.current !== null) {
      videoRef.current.play();
    } else if (ifPaused && videoRef.current !== null) {
      videoRef.current.pause();
    }
  };

  // if (videoRef.current !== null) {
  //   // On video playing toggle values
  //   videoRef.current.onplaying = function () {
  //     ifPaused = false;
  //   };

  //   // On video pause toggle values
  //   videoRef.current.onpause = function () {
  //     ifPaused = true;
  //   };
  // }

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

export default ExerciseVideo;
