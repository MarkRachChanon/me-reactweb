import axios from "axios";

export default axios.create({
  baseURL: "https://me-api-bf8y.onrender.com/",
  headers: {
    "Content-type": "application/json"
  }
});