import FeedPostList from "../feed-post-list/FeedPostList";
import ShareInput from "../share-input/ShareInput";
import styles from "./Feed.module.css";

function Feed() {
  return (
    <div className={styles.feed}>
      <div className={styles.wrapper}>
        <ShareInput />
        <FeedPostList />
      </div>
    </div>
  );
}

export default Feed;
