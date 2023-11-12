import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGZkNTk2YTQxYTEyMTViNDFkODI5MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5OTQ0MDk4NywiZXhwIjoxNjk5NzAwMTg3fQ.HOyczM_qtMMmCqgLRbjrFjzOKeX30cYMdLRzXKm6eL4";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
