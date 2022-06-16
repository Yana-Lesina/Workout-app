import React from "react";
import { Link } from "react-router-dom";

const StartButton: React.FC = () => {
  return (
    <button type="button" className="start-button" autoFocus>
      <Link to="/exercise">Start Workout</Link>
    </button>
  );
};

export default StartButton;
