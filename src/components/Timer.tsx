import "../App.css";
import React from "react";

type TimerType = {
  className: string;
  time: number;
  duration: number;
};

const Timer: React.FC<TimerType> = ({ className, time, duration }) => {
  const size = 128;
  const radius = (size * 0.92) / 2;
  const progress = (time / duration) * 100;
  const dashArrayNum = 2 * 3.14 * radius;
  const dashOffsetNum = ((100 - progress) / 100) * dashArrayNum;

  return (
    <div className={"timer-sector "}>
      <div className="timer ">{time}</div>
      <svg width={String(size)} height={String(size)}>
        <linearGradient className={className} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" className="stop-offset-from" />

          <stop offset="100%" className="stop-offset-to" />
        </linearGradient>
        <circle
          className={"circle-progress-line " + className}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth="8%"
          strokeDasharray={String(dashArrayNum)}
          strokeDashoffset={String(dashOffsetNum)}
          strokeLinecap={"round"}
          transform={"rotate(-90 ) translate(" + -size + " 0)"}
        ></circle>
      </svg>
    </div>
  );
};

export default Timer;
