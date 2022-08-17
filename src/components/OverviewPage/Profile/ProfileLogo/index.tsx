import React from "react";

import userImg from "src/assets/images/user.svg";
import styles from "./ProfileLogo.module.scss";

type ProfileLogoType = {
  onClick: any;
};

const ProfileLogo: React.FC<ProfileLogoType> = ({ onClick }) => {
  return (
    <div className={styles.userProfileIcon} onClick={onClick}>
      <img src={userImg} />
    </div>
  );
};

export default ProfileLogo;
