import { Link } from "react-router";
import { FiBell, FiMessageSquare, FiSearch } from "react-icons/fi";
import styles from "./Topbar.module.css";
import { useAuth } from "../../context/auth/AuthContext";
import { logout } from "../../context/auth/authActions";
import Button from "../ui/button/Button";
import IconButton from "../ui/icon-button/IconButton";

function Topbar() {
  const { user } = useAuth();

  const handleLogoutClick = () => {
    logout();
  };

  return (
    <div className={styles.topbar}>
      <div className={styles.left}>
        <div>
          <Link to="/">
            <span>Facelook</span>
          </Link>
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
          <IconButton badgeValue={6}>
            <FiMessageSquare className={styles.icon} size={24} color="white" />
          </IconButton>
        </div>
        <div className={styles.iconBox}>
          <IconButton badgeValue={"9+"}>
            <FiBell className={styles.icon} size={24} color="white" />
          </IconButton>
        </div>
        <div className={styles.iconBox}>
          {user?.user?.profilePic ? (
            <Link to={`profile/${user?.user.username}`}>
              <img
                src={user.user.profilePic}
                alt=""
                width={30}
                height={30}
                className={styles.img}
              />
            </Link>
          ) : (
            <Link to={`profile/${user?.user.username}`}>
              <img
                src="/default.jpg"
                alt=""
                width={30}
                height={30}
                className={styles.img}
              />
            </Link>
          )}
        </div>
        <Button onClick={handleLogoutClick}>Logout</Button>
      </div>
    </div>
  );
}

export default Topbar;
