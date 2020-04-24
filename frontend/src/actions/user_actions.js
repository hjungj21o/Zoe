import { getProfile } from "../util/user_util";
export const RECEIVE_USER_PROFILE = "RECEIVE_USER_PROFILE";

export const receiveUserProfile = (user) => ({
  type: RECEIVE_USER_PROFILE,
  user,
});

export const getUserProfile = (id) => (dispatch) =>
  getProfile(id).then((user) => dispatch(receiveUserProfile(user)));
