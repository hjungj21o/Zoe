import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import mealReducer from "./meal_reducer";

const RootReducer = combineReducers({
  meals: mealReducer,
  session,
  errors,
});

export default RootReducer;
