import "../App.css";
import React from "react";
import BackImg from "../images/back-img.svg";
import ForwardImg from "../images/forward-img.svg";

type TimerType = {
  className: string;
  time: number;
};

const Timer: React.FC<TimerType> = ({ className, time }) => {
  return (
    <div className="timer-wrapper">
      <div className="back-button">
        <img src={BackImg} alt="back-img" className="back-img" />
      </div>
      <div className={"timer-sector " + className}>
        <div className="timer ">{time}</div>
      </div>
      <div className="forward-button">
        <img src={ForwardImg} alt="forward-img" className="forward-img" />
      </div>
    </div>
  );
};

export default Timer;
