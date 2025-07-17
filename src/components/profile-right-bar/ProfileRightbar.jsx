import styles from "./ProfileRightbar.module.css";

function ProfileRightbar() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <p>User info</p>
          <div className={styles.box}>
            <span>City:</span>
            <span>Gurugram</span>
          </div>
          <div className={styles.box}>
            <span>From:</span>
            <span>Haryana</span>
          </div>
          <div className={styles.box}>
            <span>Relationship:</span>
            <span>Single</span>
          </div>
        </div>
        <div className={styles.freinds}>
          <p>Friends</p>
          <div className={styles.friendList}>
            <div className={styles.friend}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
                alt="user photo"
                width={40}
                height={40}
              />
              <span>Jone doe</span>
            </div>
            <div className={styles.friend}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
                alt="user photo"
                width={40}
                height={40}
              />
              <span>Jone doe</span>
            </div>
            <div className={styles.friend}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
                alt="user photo"
                width={40}
                height={40}
              />
              <span>Jone doe</span>
            </div>
            <div className={styles.friend}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
                alt="user photo"
                width={40}
                height={40}
              />
              <span>Jone doe</span>
            </div>
            <div className={styles.friend}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s"
                alt="user photo"
                width={40}
                height={40}
              />
              <span>Jone doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileRightbar;
