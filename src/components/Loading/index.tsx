import styles from "./Loading.module.css";

const Loading: React.FC = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loaderDot}></div>
      <div className={styles.loaderDot}></div>
      <div className={styles.loaderDot}></div>
    </div>
  );
};

export default Loading;
