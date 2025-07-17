import {
  FiBookmark,
  FiGrid,
  FiPieChart,
  FiVideo,
  FiWifi,
} from "react-icons/fi";
import styles from "./Leftbar.module.css";

const sidebarData = [
  {
    id: 1,
    title: "Feed",
    icon: <FiWifi />,
    href: "/",
  },
  {
    id: 2,
    title: "Chats",
    icon: <FiPieChart />,
    href: "/chats",
  },
  {
    id: 3,
    title: "Videos",
    icon: <FiVideo />,
    href: "/videos",
  },
  {
    id: 4,
    title: "Groups",
    icon: <FiGrid />,
    href: "/groups",
  },
  {
    id: 5,
    title: "Bookmarks",
    icon: <FiBookmark />,
    href: "/bookmark",
  },
];

const friends = [
  {
    id: 1,
    title: "Jone Doe",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s",
  },
  {
    id: 2,
    title: "Jane Smith",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s",
  },
];

function Leftbar() {
  return (
    <div className={styles.leftbar}>
      <div className={styles.wrapper}>
        <ul className={styles.items}>
          <small>Menu</small>
          {sidebarData.map((item) => (
            <li
              key={item.id}
              className={
                item.href === location.pathname ? styles.active : undefined
              }
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
        <ul className={styles.friendsList}>
          <small>Friends</small>
          {friends.map((item) => (
            <li key={item.id}>
              <img
                src={item.img}
                alt={`${item.title} photo`}
                width={30}
                height={30}
                className={styles.img}
              />
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Leftbar;
