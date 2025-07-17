import { FiBell, FiMessageSquare, FiSearch } from "react-icons/fi";
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
      <div className={styles.right}>
        <div className={styles.iconBox}>
          <FiMessageSquare className={styles.icon} size={24} color="white" />
          <div className={styles.iconBadge}>
            <span>1</span>
          </div>
        </div>
        <div className={styles.iconBox}>
          <FiBell className={styles.icon} size={24} color="white" />
          <div className={styles.iconBadge}>
            <span>89</span>
          </div>
        </div>
        <div className={styles.iconBox}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
            alt=""
            width={30}
            height={30}
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
