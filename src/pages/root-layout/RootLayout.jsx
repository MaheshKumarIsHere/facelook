import { Outlet } from "react-router";
import Leftbar from "../../components/leftbar/Leftbar";
import Topbar from "../../components/topbar/Topbar";
import styles from "./RootLayout.module.css";

function RootLayout() {
  return (
    <>
      <Topbar />
      <div className={styles.main}>
        <div className={styles.left}>
          <Leftbar />
        </div>
        <div className={styles.right}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default RootLayout;
