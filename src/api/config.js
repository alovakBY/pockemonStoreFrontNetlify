import axios from "axios";
import { LOCAL_STORAGE_KEYS } from "../constants/localStorageKeys";
import AuthService from "../services/authService";

// const BASE_URL = "https://it-shatle-demo-api.herokuapp.com";
const BASE_URL =
   "https://nimble-baklava-8bff85.netlify.app/.netlify/functions/server";
// const BASE_URL = "http://localhost:5000/.netlify/functions/server";

const config = {
   baseURL: BASE_URL,
   headers: {
      // "Access-Control-Request-Headers":
      //    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      //  "Access-Control-Request-Origin": "https://timely-mochi-9018a9.netlify.app/",
      "Access-Control-Request-Methods": "POST, GET, PUT, OPTIONS, DELETE, HEAD",
   },
   withCredentials: true,
};

const api = axios.create(config);

api.interceptors.request.use((axiosConfig) => {
   const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

   axiosConfig.headers.Authorization = `Bearer ${accessToken}`;

   return axiosConfig;
});

api.interceptors.response.use(
   (response) => {
      return response;
   },
   (error) => {
      if (error.response.status === 401) {
         AuthService.signOut();
         return;
      }
      if (error.response.status === 400) {
         return Promise.reject(error.response.data);
      }
      return Promise.reject(error.response.data);
   }
);

export default api;
