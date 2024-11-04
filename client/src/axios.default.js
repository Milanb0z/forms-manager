import axios from "axios";

axios.defaults.baseURL = import.meta.env.DEV
  ? "http://localhost:3000/api"
  : "https://shark-app-j29yz.ondigitalocean.app/api/";

export default axios;
