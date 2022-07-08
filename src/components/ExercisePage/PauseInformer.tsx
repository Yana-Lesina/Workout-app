import React from "react";
import "../../styles/ExercisePage/PauseInformer.scss";

import { Link } from "react-router-dom";

const PauseInformer: React.FC = () => {
  return (
    <>
      <div className="pause-informer">
        <h2 className="pause-title">Workout paused</h2>
        <div className="pause-text">
          Press “Play button” or “Space bar” to continue
        </div>
        <Link to="/">
          <div className="leave-workout-button">
            <span className="leave-workout-button-text">Leave Workout</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default PauseInformer;
