import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});


//Instead of always writing the http endpoint for axios now we can simply call publicReq and userReq for respective uses.