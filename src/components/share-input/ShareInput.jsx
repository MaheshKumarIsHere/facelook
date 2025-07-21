import styles from "./ShareInput.module.css";
import { BsEmojiDizzy } from "react-icons/bs";
import { FiMapPin, FiSend, FiTag, FiVideo } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router";
import { useState } from "react";
import axios from "axios";

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
  const { user } = useAuth();
  const [text, setText] = useState("");
  const [file, setFile] = useState("");
  console.log(file);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      userId: user?.user._id,
      desc: text,
    };
    if (file) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const formData = new FormData();
      const fileName = `${file?.name?.split(".")[0]}-${uniqueSuffix}.${
        file?.name?.split(".")[1]
      }`;
      formData.append("file", file);
      formData.append("fileName", fileName);
      postData.img = fileName;
      console.log(formData);
      const uploadFile = async () => {
        try {
          const res = await axios.post("/api/v1/files/", formData);
          console.log(res);
        } catch (error) {
          console.log(error);
        }
      };
      uploadFile();
    }
    const sendPost = async () => {
      try {
        const res = await axios.post("/api/v1/posts", postData);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    sendPost();
  };
  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit}
      enctype="multipart/form-data"
    >
      <div className={styles.inputBox}>
        {user?.user?.profilePic ? (
          <img
            src={user.user.profilePic}
            alt=""
            width={50}
            height={50}
            className={styles.img}
          />
        ) : (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
            alt=""
            width={50}
            height={50}
            className={styles.img}
          />
        )}
        <input
          type="text"
          placeholder={`Hey ${user?.user.username}, What's in your mind?`}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">
          <FiSend />
          <span>Share</span>
        </button>
      </div>
      <hr />
      <div className={styles.icons}>
        <label htmlFor="photoOrVideo" className={styles.iconBox}>
          <FiVideo size={20} color="green" />
          <span>Photo or video</span>
          <input
            type="file"
            id="photoOrVideo"
            accept=".png,.jpeg,.jpg"
            hidden
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>
      </div>
    </form>
  );
}

export default ShareInput;
