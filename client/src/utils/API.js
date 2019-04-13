import axios from "axios";

const API = axios.create({
  headers: {
    Authorization: localStorage.token || ""
  }
});

export default API;
