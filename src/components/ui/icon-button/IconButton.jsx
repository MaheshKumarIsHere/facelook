import Badge from "../badge/Badge";
import styles from "./IconButton.module.css";

function IconButton({
  children,
  onClick = () => {},
  showBadge = true,
  badgeValue = 0,
}) {
  return (
    <button onClick={onClick} className={styles.container}>
      {children}
      {showBadge && <Badge>{badgeValue}</Badge>}
    </button>
  );
}

export default IconButton;
