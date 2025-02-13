import axios from "axios";

export default axios.create({
  baseURL: "https://me-api-tp1z.onrender.com/",
  headers: {
    "Content-type": "application/json"
  }
});