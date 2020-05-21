import { getProfile, editProfile } from "../util/user_util";
export const RECEIVE_USER_PROFILE = "RECEIVE_USER_PROFILE";
export const RECEIVE_EDIT_ERRORS = "RECEIVE_EDIT_ERRORS"; 
export const CLEAR_EDIT_ERRORS = "CLEAR_EDIT_ERRORS"

export const receiveUserProfile = (user) => ({
  type: RECEIVE_USER_PROFILE,
  user,
});

export const receiveEditErrors = (errors) => ({
  type: RECEIVE_EDIT_ERRORS, 
  errors
})

export const clearEditErrors = () => ({
  type: CLEAR_EDIT_ERRORS
})

export const getUserProfile = (id) => (dispatch) =>
  getProfile(id).then((user) => dispatch(receiveUserProfile(user)));

export const editUserProfile = (id, userData) => (dispatch) => {
  editProfile(id, userData).then(user => dispatch(receiveUserProfile(user)), (err) => dispatch(receiveEditErrors(err)))
}
