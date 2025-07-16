import styles from "./Topbar.module.css";

function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.left}>
        <div>
          <span>Facelook</span>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.searchBox}>
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className={styles.right}>right</div>
    </div>
  );
}

export default Topbar;
