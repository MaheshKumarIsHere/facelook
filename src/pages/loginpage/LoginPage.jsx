import { useEffect, useState } from "react";
import styles from "./LoginPage.module.css";
// import validator from "validator";
import { useAuth } from "../../context/auth/AuthContext";
import { loginCall } from "../../utils/apiCalls";
import { useNavigate } from "react-router";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, loading, error, dispatch } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall({ email, password }, dispatch);
  };

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
          <h2>Facelook</h2>
        </div>
        {error && <p>{error}</p>}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputBox}>
            <input
              type="text"
              name="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputBox}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <small>Forgot Password?</small>
          <button>{loading ? "Loading" : "Login Account"}</button>
        </form>
        <div className={styles.extra}>
          <small>Or</small>
          <p>
            Don't have an account? <span>Create account?</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
