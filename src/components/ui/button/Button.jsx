import styles from "./Button.module.css";

function Button({ children, onClick = () => {} }) {
  return (
    <button onClick={onClick} className={styles.btn}>
      {children}
    </button>
  );
}

export default Button;
