import styles from "./FeedPostList.module.css";
import Post from "../post/Post";

const postListData = [
  {
    id: 1,
    userPhoto:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    username: "Jane Smith",
    postTime: "2025-12-04,10:12",
    postText:
      "Today, I am going to manali it's is my first time to visit cold place. Hope everything will be all right! ❤💖",
    postImage:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    likeCount: 124,
  },
  {
    id: 2,
    userPhoto:
      "https://img.freepik.com/free-photo/riding-public-transport-way-work-shot-positive-friendly-handsome-male-with-moustache-beard-glasses-wearing-earphones-listening-music-getting-satisfaction-from-great-bids_176420-22419.jpg?semt=ais_hybrid&w=740",
    username: "Jane Doe",
    postTime: "2024-06-04,10:12",
    postText: "Hureey holiday time",
    postImage:
      "https://media.istockphoto.com/id/1160947136/photo/couple-relax-on-the-beach-enjoy-beautiful-sea-on-the-tropical-island.jpg?s=612x612&w=0&k=20&c=WJWEH22TFinjI0edzblfH-Nw0cdBfPX5LV8EMvs8Quo=",
    likeCount: 124,
  },
];

function FeedPostList() {
  return (
    <div className={styles.feedpostlist}>
      {postListData.map((item) => (
        <Post postItem={item} key={item.id} />
      ))}
    </div>
  );
}

export default FeedPostList;
