import axios from "axios";

const instance = axios.create({
  baseURL: "...", // The API URL (CLOUD function)
});

export default instance;
