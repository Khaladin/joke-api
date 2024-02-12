import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://mwks-joke-service.azurewebsites.net/api/joke/random"
});

export default axiosClient;