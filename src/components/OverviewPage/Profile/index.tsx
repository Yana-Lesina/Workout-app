import React from "react";
import styles from "./Profile.module.scss";

import ProfileLogo from "./ProfileLogo";
import ProfilePopup from "./ProfilePopup";

const Profile = () => {
  const [showProfilePopup, setShowProfilePopup] =
    React.useState<boolean>(false);

  return (
    <>
      <div className={styles.profileWrapper}>
        <ProfileLogo onClick={() => setShowProfilePopup(true)} />
      </div>
      {showProfilePopup && (
        <ProfilePopup onClick={() => setShowProfilePopup(false)} />
      )}
    </>
  );
};

export default Profile;
