import { FiMoreVertical, FiShare, FiShare2, FiThumbsUp } from "react-icons/fi";
import styles from "./Post.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { format } from "timeago.js";

function Post({ postItem }) {
  const [user, setUser] = useState({});
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(postItem.likes.length);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/v1/users/${postItem.userId}`);
      setUser(res.data);
    };
    fetchData();
  }, [postItem.userId]);
  const handleLike = async () => {
    // const res = await axios.put(`/api/v1/posts/${postItem._id}/like`, {
    //   userId: "687a0c9a304b27287ab0bc18",
    // });
    // console.log(res);
    // if (res.ok) {
    //   setLike(true);
    // }
    // if (like) {
    //   setLikeCount((prev) => prev + 1);
    //   setLike(true);
    // } else {
    //   setLikeCount((prev) => prev - 1);
    //   setLike(false);
    // }
  };
  return (
    <div className={styles.post}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <Link to={`profile/${user.username}`}>
            {user.profilePic ? (
              <img
                src={user.profilePic}
                alt="user photo"
                width={30}
                height={30}
              />
            ) : (
              <img src="/default.jpg" alt="user photo" width={30} height={30} />
            )}
          </Link>
          <div className={styles.textBox}>
            <p>{user.username}</p>
            <p>{format(user.updatedAt)}</p>
          </div>
        </div>
        <FiMoreVertical className={styles.icon} size={20} color="grey" />
      </div>
      <div className={styles.middle}>
        <p>{postItem.desc}</p>
        <img src={postItem.img} alt={`${postItem.username} photo`} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.iconBox} onClick={handleLike}>
          {like ? (
            <FiThumbsUp size={20} color="teal" />
          ) : (
            <FiThumbsUp size={20} color="grey" />
          )}
          <span>Likes</span>
          <span>({likeCount})</span>
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
