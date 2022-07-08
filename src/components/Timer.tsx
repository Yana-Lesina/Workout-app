import React from "react";

type TimerType = {
  className: string;
  duration: number;
  ifPaused: boolean;
  handleRunOut: any;
};

const Timer: React.FC<TimerType> = ({
  className,
  duration,
  ifPaused,
  handleRunOut,
}) => {
  const [time, setTime] = React.useState<number>(duration);
  const size = 128;
  const radius = (size * 0.92) / 2;
  const progress = (time / duration) * 100;
  const circumference = 2 * 3.14 * radius;
  const dashOffsetNum = ((100 - progress) / 100) * circumference;
  let timeoutID: NodeJS.Timeout | undefined;

  React.useEffect(() => {
    setTime(duration);
  }, [duration]);

  React.useEffect(() => {
    if (ifPaused || !time) {
      clearTimeout(timeoutID);
      if (!time) {
        handleRunOut(false);
      }
    } else {
      if (time >= 1) {
        timeoutID = setTimeout(() => {
          setTime(time - 1);
        }, 1000);
      }
    }
    return () => clearTimeout(timeoutID);
  }, [ifPaused, time]);

  return (
    <div className={"timer-sector "}>
      <div className="timer ">{time}</div>
      <svg width={String(size)} height={String(size)}>
        <circle
          className={"circle-background-line"}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth="8%"
        ></circle>

        <circle
          className={"circle-progress-line " + className}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          strokeWidth="8%"
          strokeDasharray={String(circumference)}
          strokeDashoffset={String(dashOffsetNum)}
          strokeLinecap={"round"}
          transform={"rotate(-90 ) translate(" + -size + " 0)"}
        >
          {/* <animate
            attributeName="stroke-dashoffset"
            dur={1}
            from={100 - progress}
            to={100 - (progress + (100 - (time / duration) * 100))}
          /> */}
        </circle>
      </svg>
    </div>
  );
};

export default Timer;
