import React from "react";
import styles from "./ProfilePopup.module.scss";
import { Link, useNavigate } from "react-router-dom";

import { checkUser, logOut } from "../../../../firebase/authFuncs";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../redux-store/store";
import { removeUser } from "../../../../redux-store/slices/userSlice";

import crossImg from "../../../../assets/images/cross.svg";

type ProfilePopupType = {
  onClick: any;
};

const ProfilePopup: React.FC<ProfilePopupType> = ({ onClick }) => {
  const userData = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async (event: any) => {
    event.preventDefault();

    logOut();
  };
  return (
    <div className={styles.userProfileBlock}>
      <div className={styles.crossImageBlock}>
        <img src={crossImg} className={styles.crossImage} onClick={onClick} />
      </div>

      <ul>
        <li className={styles.email}>{userData.email}</li>
        <li className={styles.email}>{`Role: ${userData.displayName}`}</li>
        <li>
          <Link to="/change-password">Change Password</Link>
        </li>
        <li>
          <Link to="/change-email">Change Email</Link>
        </li>
        <li onClick={handleSignOut}>Log Out</li>
      </ul>
    </div>
  );
};

export default ProfilePopup;
