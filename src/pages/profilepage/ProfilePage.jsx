import styles from "./ProfilePage.module.css";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

function ProfilePage() {
  const [user, setUser] = useState("");
  const { username } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/v1/users/?username=${username}`);
      setUser(res.data);
    };
    fetchData();
  }, [username]);
  console.log(user);
  return (
    <div className={styles.main}>
      <div className={styles.profileBox}>
        <img
          src={
            user?.coverPic?.length > 0
              ? user.coverPic
              : "https://marketplace.canva.com/EAED_WYebUA/2/0/1600w/canva-explore-brush-script-photo-facebook-cover-nmLQj7f0bVU.jpg"
          }
          alt="photo"
          className={styles.coverImg}
        />
        <div className={styles.profileImgBox}>
          <img
            src={
              user?.profilePic?.length > 0 ? user.profilePic : "/default.jpg"
            }
            alt="photo"
          />
          <h1>{user.username}</h1>
          {/* <p>Software developer & Designer</p> */}
        </div>
      </div>
      <div className={styles.bottom}>
        <Feed username={user.username} />
        <Rightbar rightbar user={user} />
      </div>
    </div>
  );
}

export default ProfilePage;
