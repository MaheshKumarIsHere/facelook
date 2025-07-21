import FeedPostList from "../feed-post-list/FeedPostList";
import ShareInput from "../share-input/ShareInput";
import styles from "./Feed.module.css";

function Feed({ username }) {
  return (
    <div className={styles.feed}>
      <div className={styles.wrapper}>
        <ShareInput />
        <FeedPostList username={username} />
      </div>
    </div>
  );
}

export default Feed;
