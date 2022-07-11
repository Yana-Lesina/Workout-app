import React from "react";
import "../../styles/ExercisePage/PauseInformer.scss";

import { Link } from "react-router-dom";

const PauseInformer: React.FC = () => {
  return (
    <>
      <div className="pause-informer">
        <div className="pause-headers">
          <h2 className="pause-title">Workout paused</h2>
          <div className="pause-text">
            Press “Play button” or “Space bar” to continue
          </div>
        </div>

        <div className="leave-workout-button">
          <Link to="/" className="leave-workout-button-li">
            Leave Workout
          </Link>
        </div>
      </div>
    </>
  );
};

export default PauseInformer;
