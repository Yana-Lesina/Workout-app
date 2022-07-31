import React from "react";

import { Link, useNavigate } from "react-router-dom";

import styles from "./ProfilePopup.module.scss";

import { logOut } from "../../../firebase/authFuncs";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux-store/store";
import { removeUser } from "../../../redux-store/slices/userSlice";

import crossImg from "../../../assets/images/cross.svg";

type ProfilePopupType = {
  onClick: any;
};

const ProfilePopup: React.FC<ProfilePopupType> = ({ onClick }) => {
  const userData = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async (event: any) => {
    event.preventDefault();

    await logOut()
      .then(() => {
        dispatch(removeUser());
        navigate("/log-in");
      })
      .catch((error: Error) => {
        alert(`LogOut failure... \n${error.message}`);
      });
  };
  return (
    <div className={styles.userProfileBlock}>
      <div className={styles.crossImageBlock}>
        <img src={crossImg} className={styles.crossImage} onClick={onClick} />
      </div>

      <ul>
        <li className={styles.email}>{userData.email}</li>
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
