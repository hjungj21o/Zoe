import axios from "axios";

export const getProfile = (userId) => {
  return axios.get(`/api/users/profile/${userId}`);
};
