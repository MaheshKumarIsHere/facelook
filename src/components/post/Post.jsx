import { FiMoreVertical, FiShare, FiShare2, FiThumbsUp } from "react-icons/fi";
import styles from "./Post.module.css";

function Post({ postItem }) {
  return (
    <div className={styles.post}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <img
            src={postItem.userPhoto}
            alt="user photo"
            width={30}
            height={30}
          />
          <div className={styles.textBox}>
            <p>{postItem.username}</p>
            <p>{new Date(postItem.postTime).toDateString()}</p>
          </div>
        </div>
        <FiMoreVertical className={styles.icon} size={20} color="grey" />
      </div>
      <div className={styles.middle}>
        <p>{postItem.postText}</p>
        <img src={postItem.postImage} alt={`${postItem.username} photo`} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.iconBox}>
          <FiThumbsUp size={20} color="grey" />
          <span>Likes</span>
          <span>({postItem.likeCount})</span>
        </div>
        <div className={styles.iconBox}>
          <FiShare2 size={20} color="grey" />
          <span>Share</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
