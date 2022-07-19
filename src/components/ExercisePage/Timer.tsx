import React from "react";
import styles from "../../styles/ExercisePage/Timer.module.scss";

type TimerType = {
  duration: number;
  ifPaused: boolean;
  isPrepared?: boolean;
  handleRunOut?: any;
  switchHandler?: number;
};

const Timer: React.FC<TimerType> = ({
  duration,
  ifPaused,
  isPrepared,
  handleRunOut,
  switchHandler,
}) => {
  const [time, setTime] = React.useState<number>(duration);
  const size = 128;
  const radius = (size * 0.92) / 2;
  const progress = (time / duration) * 100;
  const circumference = 2 * 3.14 * radius;
  const dashOffsetNum = ((100 - progress) / 100) * circumference;
  let timeoutID: NodeJS.Timeout | undefined;

  //for "ger ready <- get ready" situation: timer countdown from 5 again
  React.useEffect(() => {
    if (!isPrepared) setTime(5);
  }, [switchHandler]);

  React.useEffect(() => {
    setTime(duration);
  }, [duration]);

  React.useEffect(() => {
    if (ifPaused || !time) {
      clearTimeout(timeoutID);
      if (!time) {
        handleRunOut?.(false);
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
    <div className={styles.timerSector}>
      <div className={styles.timer}>{time}</div>
      <svg width={String(size)} height={String(size)}>
        <circle
          className={styles.circleBackgroundLine}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth="8%"
        ></circle>

        <circle
          className={`${styles.circleProgressLine} ${
            isPrepared ? styles.exerciseTimer : styles.getReadyTimer
          }`}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          strokeWidth="8%"
          strokeDasharray={String(circumference)}
          strokeDashoffset={String(dashOffsetNum)}
          strokeLinecap={"round"}
          transform={`rotate(-90) translate(${-size} 0)`}
        ></circle>
      </svg>
    </div>
  );
};

export default Timer;
