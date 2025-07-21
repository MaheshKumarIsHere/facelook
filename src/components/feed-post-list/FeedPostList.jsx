import styles from "./FeedPostList.module.css";
import Post from "../post/Post";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/auth/AuthContext";

function FeedPostList({ username }) {
  const [postList, setPostList] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const fetchData = async () => {
      const res = username
        ? await axios.get(`/api/v1/posts/profile/${username}`)
        : await axios.get(`/api/v1/posts/timeline/${user?.user._id}`);
      setPostList(res.data);
    };
    fetchData();
  }, [username, user]);
  return (
    <div className={styles.feedpostlist}>
      {postList.length > 0 &&
        postList.map((item) => <Post key={item._id} postItem={item} />)}
    </div>
  );
}

export default FeedPostList;
