import axios from "axios";

export const login = async (user, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/api/v1/auth/login", user);
    localStorage.setItem("user", JSON.stringify(res.data));
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILED", payload: error });
  }
};

export const logout = async () => {
  localStorage.removeItem("user");
  window.location.reload();
};
