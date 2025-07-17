import styles from "./ShareInput.module.css";
import { BsEmojiDizzy } from "react-icons/bs";
import { FiMapPin, FiSend, FiTag, FiVideo } from "react-icons/fi";

const iconsList = [
  {
    id: 1,
    text: "Photo or video",
    icon: <FiVideo size={20} color="green" />,
  },
  {
    id: 2,
    text: "Tag",
    icon: <FiTag size={20} color="purple" />,
  },
  {
    id: 3,
    text: "Location",
    icon: <FiMapPin size={20} color="blue" />,
  },
  {
    id: 4,
    text: "Feelings",
    icon: <BsEmojiDizzy size={20} color="red" />,
  },
];

function ShareInput() {
  return (
    <div className={styles.container}>
      <div className={styles.inputBox}>
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="user profile"
          width={50}
          height={50}
        />
        <input type="text" placeholder={`Hey Jone Doe, What's in your mind?`} />
        <button>
          <FiSend />
          <span>Share</span>
        </button>
      </div>
      <hr />
      <div className={styles.icons}>
        {iconsList.map((item) => (
          <div key={item.id} className={styles.iconBox}>
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShareInput;
