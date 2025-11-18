import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

// 이메일로 사용자 조회
export const fetchUserByEmail = async (email) => {
  const res = await api.get("/users", { params: { email } });
  return res.data;
};

// 회원가입
export const signupUser = async (userData) => {
  const res = await api.post("/users", userData);
  return res.data;
};
