import { combineReducers } from "redux";

import SessionErrorsReducer from "./session_errors_reducer";
import EditErrorsReducer from './update_user_errors_reducer'

export default combineReducers({
  session: SessionErrorsReducer,
  update_profile: EditErrorsReducer
});
