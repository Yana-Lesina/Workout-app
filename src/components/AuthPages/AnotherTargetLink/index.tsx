import React from "react";
import { Link } from "react-router-dom";
import styles from "./AnotherTargetLink.module.scss";

type SwitchLinkType = {
  targetText?: string;
  path: string;
  linkText: string;
};

const AnotherTargetLink: React.FC<SwitchLinkType> = ({
  targetText,
  path,
  linkText,
}) => {
  return (
    <span className={styles.targetLink}>
      {targetText} <Link to={path}>{linkText}</Link>
    </span>
  );
};

export default AnotherTargetLink;
