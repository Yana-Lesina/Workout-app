import "../App.css";
import React from "react";

const VideoPlayer: React.FC = () => {
  return (
    <>
      <video
        id="video-player"
        controls
        autoPlay
        loop
        poster="https://meal-workouts-prod.s3.amazonaws.com/workouts/exercises/360x360/fed06899b5f2c3b8cde17293e9346d11.jpg"
        src="https://player.vimeo.com/external/342249535.sd.mp4?s=c0847c750671537e3cd747a98faf3c58c098cf04&profile_id=165"
      ></video>
    </>
  );
};

export default VideoPlayer;
