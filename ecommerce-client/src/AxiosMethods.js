import axios from "axios";

const Base_url = "http://localhost:8000/api/";

export const publicRequest = axios.create({
  baseURL: Base_url,
});

export const userRequest = axios.create({
  baseURL: Base_url,
});

userRequest.interceptors.request.use(
  (config) => {
    const storedData = localStorage.getItem("persist:root");
    let accessToken = null;

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const user = parsedData ? parsedData.user : null;
      const currentUser = user ? user.currentUser : null;
      accessToken = currentUser ? currentUser.accessToken : null;
    }

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);