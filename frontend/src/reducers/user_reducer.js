import { RECEIVE_USER_PROFILE } from "../actions/user_actions";

const userReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_PROFILE:
      return action.user.data;
    default:
      return state;
  }
};

export default userReducer;
