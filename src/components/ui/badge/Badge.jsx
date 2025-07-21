import styles from "./Badge.module.css";

function Badge({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default Badge;
