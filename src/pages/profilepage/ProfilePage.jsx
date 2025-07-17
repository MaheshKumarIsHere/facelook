import styles from "./ProfilePage.module.css";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

function ProfilePage() {
  return (
    <div className={styles.profile}>
      <Topbar />
      <div className={styles.main}>
        <Leftbar />
        <div className={styles.right}>
          <div className={styles.profileBox}>
            <img
              src="https://marketplace.canva.com/EAED_WYebUA/2/0/1600w/canva-explore-brush-script-photo-facebook-cover-nmLQj7f0bVU.jpg"
              alt="photo"
              className={styles.coverImg}
            />
            <div className={styles.profileImgBox}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
                alt="photo"
              />
              <h1>Jone Deo</h1>
              <p>Software developer & Designer</p>
            </div>
          </div>
          <div className={styles.bottom}>
            <Feed />
            <Rightbar rightbar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
