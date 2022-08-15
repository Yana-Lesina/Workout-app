import React from "react";
import styles from "./PrepareImage.module.scss";

type PrepareImageType = {
  photo: string;
};

const PrepareImage: React.FC<PrepareImageType> = ({ photo }) => {
  return (
    <div className={styles.prepareImageWrapper}>
      <img src={photo} alt="preview-image" className={styles.previewImg} />
    </div>
  );
};

export default PrepareImage;
