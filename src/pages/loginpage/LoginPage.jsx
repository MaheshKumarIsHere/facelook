import styles from "./LoginPage.module.css";
function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img
          src="https://cdn.shopify.com/s/files/1/0625/3818/6989/files/4_7f5eb4a9-6fd2-4752-bfc4-88efd9d584b7.jpg?v=1676615610"
          alt=""
        />
      </div>
      <div className={styles.right}>
        <img
          src="https://content.jdmagicbox.com/v2/comp/hyderabad/p8/040pxx40.xx40.190604181336.y4p8/catalogue/modern-art-and-texture-painting-works-hyderabad-1jj9rfzpfp.jpg"
          alt=""
        />
      </div>
      <div className={styles.formContainer}>
        <div className={styles.logoBox}>
          <img
            src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwNDktMjIucG5n.png"
            alt="logo"
            width={60}
            height={60}
          />
          <span>Facelook</span>
        </div>
        <form className={styles.form}>
          <div className={styles.inputBox}>
            <input type="text" placeholder="Email address" />
          </div>
          <div className={styles.inputBox}>
            <input type="password" placeholder="Password" />
          </div>
          <small>Forgot Password?</small>
          <button>Login Account</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
