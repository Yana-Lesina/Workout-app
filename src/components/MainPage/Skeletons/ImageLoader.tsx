import ContentLoader from "react-content-loader";
import styles from "../../../styles/MainPage/WelcomeImage.module.scss";

const ImageLoader = () => (
  <ContentLoader
    className={styles.imgContainer}
    speed={2}
    width={800}
    height={450}
    viewBox="0 0 800 450"
    backgroundColor="#f1d7f4" //"#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="800" height="450" />
  </ContentLoader>
);

export default ImageLoader;
