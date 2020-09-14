import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-79bba.cloudfunctions.net/api", // The API URL (CLOUD function)
  // baseURL: "http://localhost:5001/challenge-79bba/us-central1/api",
});

export default instance;
