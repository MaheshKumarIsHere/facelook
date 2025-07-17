import styles from "./Rightbar.module.css";

function Rightbar() {
  return (
    <div className={styles.rightbar}>
      <div className={styles.wrapper}>
        <div className={styles.birthday}>
          <img
            src="https://i.pinimg.com/474x/fe/78/1c/fe781c4148a1214aadcecf82f27def72.jpg"
            alt="birthday phgot"
            width={70}
            height={70}
          />
          <p>
            <span>Jone Smith</span> and <span>5 more</span> have birthday today.
          </p>
        </div>

        <div className={styles.onlineFreinds}>
          <ul>
            <p>Online friends</p>
            <div className={styles.friend}>
              <div className={styles.imgBox}>
                <img
                  src="https://img.freepik.com/free-photo/riding-public-transport-way-work-shot-positive-friendly-handsome-male-with-moustache-beard-glasses-wearing-earphones-listening-music-getting-satisfaction-from-great-bids_176420-22419.jpg?semt=ais_hybrid&w=740"
                  alt="user photo"
                />
                <div></div>
              </div>
              <span>Jone Doe</span>
            </div>
            <div className={styles.friend}>
              <div className={styles.imgBox}>
                <img
                  src="https://img.freepik.com/free-photo/riding-public-transport-way-work-shot-positive-friendly-handsome-male-with-moustache-beard-glasses-wearing-earphones-listening-music-getting-satisfaction-from-great-bids_176420-22419.jpg?semt=ais_hybrid&w=740"
                  alt="user photo"
                />
                <div></div>
              </div>
              <span>Jone Doe</span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
