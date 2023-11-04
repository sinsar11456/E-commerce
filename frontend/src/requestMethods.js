import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGZkNTk2YTQxYTEyMTViNDFkODI5MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5ODkxNjQyNiwiZXhwIjoxNjk5MTc1NjI2fQ.c1Qx0jxvSOB114pYw8wF-h9YkS_-bkUzSoi9kzUh1kE";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
