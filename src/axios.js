import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/challenge-79bba/us-central1/api", // The API URL (CLOUD function)
});

export default instance;
