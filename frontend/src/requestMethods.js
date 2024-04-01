import axios from "axios";

const BASE_URL = "https://e-commerce-z2bq.onrender.com/api";
                 

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const user = JSON.parse(localStorage.getItem("persist:root")) && JSON.parse(localStorage.getItem("persist:root")).user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser && currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
}); 


//Instead of always writing the http endpoint for axios now we can simply call publicReq and userReq for respective uses.