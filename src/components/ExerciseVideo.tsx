import React from "react";

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
      <video
        id="video-player"
        ref={videoRef}
        controls
        autoPlay
        loop
        poster={photo}
        src={videoLink}
      ></video>
    </>
  );
};

export default ExerciseVideo;
