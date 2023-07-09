import styles from "./Loading.module.css";

const Loading: React.FC = () => {
  return (
    <div
      className={styles.loading}
      aria-label="Loading"
      aria-live="polite"
      role="status"
    >
      <div className={styles.loaderDot} />
      <div className={styles.loaderDot} />
      <div className={styles.loaderDot} />
    </div>
  );
};

export default Loading;
