import axios from "axios";

const Base_url = "http://localhost:8000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGRiMDcwODJiOTY1ODg4ZjVmYzJhZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNjM2NzY3OSwiZXhwIjoxNzE2NjI2ODc5fQ.Q1c81frm2Md4v7AFDiDDP_arE9yXxn_P6j-o07KBmjg";

export const publicRequest = axios.create({
  baseURL: Base_url,
});

export const userRequest = axios.create({
  baseURL: Base_url,
  headers: { token: `Bearer ${TOKEN}` },
});
