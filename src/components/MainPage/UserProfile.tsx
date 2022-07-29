import React from "react";

import userImg from "../../assets/images/user.svg";

import { logOut } from "../../firebase/authFuncs";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux-store/slices/userSlice";
import { useNavigate } from "react-router-dom";

import crossImg from "../../assets/images/cross.svg";
import styles from "../../styles/MainPage/UserProfile.module.scss";

const UserProfile = () => {
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
    <>
      <div className={styles.userProfileIcon}>
        <img src={userImg} />
      </div>
      <div className={styles.userProfileBlock}>
        <div className={styles.crossImageBlock}>
          <img src={crossImg} className={styles.crossImage} />
        </div>
        <p>Avatar</p>
        <p>User Name</p>
        <p>Change Password</p>
        <p>Change Email</p>

        <p onClick={handleSignOut}>Log Out</p>
      </div>
    </>
  );
};

export default UserProfile;
