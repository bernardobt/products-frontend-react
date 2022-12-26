import axios from "axios";
import { BASE_URL } from "../constants/apiUrls.js";

export default axios.create({
  baseURL: BASE_URL,
});
