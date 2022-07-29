import React from "react";

import ProfileLogo from "./ProfileLogo";
import ProfilePopup from "./ProfilePopup";

const Profile = () => {
  const [showUserProfile, setShowUserProfile] = React.useState<boolean>(false);

  return (
    <>
      <ProfileLogo onClick={() => setShowUserProfile(true)} />
      {showUserProfile && (
        <ProfilePopup onClick={() => setShowUserProfile(false)} />
      )}
    </>
  );
};

export default Profile;
