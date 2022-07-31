import React from "react";

import ProfileLogo from "./ProfileLogo";
import ProfilePopup from "./ProfilePopup";

const Profile = () => {
  const [showProfilePopup, setShowProfilePopup] =
    React.useState<boolean>(false);

  return (
    <>
      <ProfileLogo onClick={() => setShowProfilePopup(true)} />
      {showProfilePopup && (
        <ProfilePopup onClick={() => setShowProfilePopup(false)} />
      )}
    </>
  );
};

export default Profile;
