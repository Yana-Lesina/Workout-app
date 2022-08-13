import React from "react";
import styles from "./ModalWindow.module.scss";
import crossImg from "../../../assets/images/cross.svg";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux-store/store";
import { setHidden } from "../../../redux-store/slices/modalWindowSlice";

const ModalWindow: React.FC = () => {
  const dispatch = useDispatch();

  const modalWindow = useSelector((state: RootState) => state.modalWindow);

  const modalMessage = modalWindow.value;
  const handleText = modalWindow.handleText;
  const hiddenModal = modalWindow.hidden;
  const handleFunc = modalWindow.handleFunc;

  return (
    <div
      className={`${styles.modalBackground} ${
        hiddenModal ? styles.hidden : ""
      }`}
      onClick={() => dispatch(setHidden(!hiddenModal))}
    >
      <div className={`${styles.modalWindow}`}>
        <div
          className={styles.crossImageWrapper}
          onClick={() => dispatch(setHidden(!hiddenModal))}
        >
          <img src={crossImg} alt="cross-img" />
        </div>

        <div className={styles.textWrapper}>
          <p>{modalMessage}</p>
          {handleFunc && (
            <p className={styles.targetMessage}>
              <span className={styles.targetWord}> {handleText}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
