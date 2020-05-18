import axios from "axios";

export const getProfile = (userId) => {
  return axios.get(`/api/users/profile/${userId}`);
};

export const editProfile = (userId, userData) => {
  return axios.patch(`/api/users/profile/${userId}`, userData)
} 