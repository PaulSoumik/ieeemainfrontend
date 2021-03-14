import axios from "axios";

export default axios.create({
  baseURL: "https://ieeebackend.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  },
  withCredentials: false
});
