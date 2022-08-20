import React from "react";
import styles from "./VideoFooter.module.scss";
import PlayImg from "src/assets/images/play.svg";
import PauseImg from "src/assets/images/pause.svg";

type VideoFooterType = {
  ifPaused: boolean;
  onClick: any;
  onKeyPress: any;
};

const VideoFooter: React.FC<VideoFooterType> = ({
  ifPaused,
  onClick,
  onKeyPress,
}) => {
  const buttonRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (buttonRef.current) buttonRef.current.focus();
  }, []);

  return (
    <footer
      ref={buttonRef}
      tabIndex={0}
      onKeyPress={onKeyPress}
      className={styles.footer}
    >
      {!ifPaused ? (
        <img src={PauseImg} alt="PauseImg" onClick={onClick} />
      ) : (
        <img src={PlayImg} alt="PlayImg" onClick={onClick} />
      )}
    </footer>
  );
};

export default VideoFooter;
