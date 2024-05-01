import axios from "axios";

const BASE_URL = "http://localhost:3000";
const ENDPOINT = "/users";

export default {
  getUsers() {
    return axios.get(`${BASE_URL}${ENDPOINT}`);
  },
  deleteUser(id) {
    return axios.delete(`${BASE_URL}${ENDPOINT}/${id}`);
  },
};
