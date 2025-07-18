import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.container}>
      <Feed />
      <Rightbar />
    </div>
  );
}

export default Homepage;
