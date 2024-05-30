import axios from "axios";

const Base_url = "http://localhost:8000/api/";

export const publicRequest = axios.create({
  baseURL: Base_url,
});

export const userRequest = () => {
  const persistRoot = localStorage.getItem("persist:root");
  const TOKEN = persistRoot
    ? JSON.parse(JSON.parse(persistRoot).user)?.currentUser.accessToken
    : null;

  return axios.create({
    baseURL: Base_url,
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
};
