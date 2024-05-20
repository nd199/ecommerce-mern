import axios from "axios";

const Base_url = "http://localhost:8000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDY0OTc3YTA2NTgxZmI1ZGY5Yzc2ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNjExNTUwMywiZXhwIjoxNzE2Mzc0NzAzfQ.kKKJV69GbjX8ShjeuXTGR6gd72kooAU8ZH5stfRXvGs";

export const publicRequest = axios.create({
  baseURL: Base_url,
});

export const userRequest = axios.create({
  baseURL: Base_url,
  headers: { token: `Bearer ${TOKEN}` },
});
