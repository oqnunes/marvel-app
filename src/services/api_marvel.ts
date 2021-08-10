import axios from "axios";

const default_url = process.env.REACT_APP_MARVEL_API_URL;

const api_marvel = axios.create({
  baseURL: default_url,
  headers: {
    "Content-type": "application/json; charset=utf-8",
  }
});

export default api_marvel;