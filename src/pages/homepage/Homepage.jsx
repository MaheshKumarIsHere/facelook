import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div>
      <Topbar />
      <div className={styles.main}>
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}

export default Homepage;
