import { FiSearch } from "react-icons/fi";
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
          <FiSearch className={styles.searchIcon} width={24} color="white" />
          <input type="text" placeholder="Search for friends, post and video" />
        </div>
      </div>
      <div className={styles.right}>right</div>
    </div>
  );
}

export default Topbar;
