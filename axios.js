import axios from "axios";

const instance = axios.create({
  baseURL: "https://fb-mern-clone-live.herokuapp.com",
});

export default instance;
