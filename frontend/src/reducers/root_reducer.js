import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import mealReducer from "./meal_reducer";
import uiReducer from "./ui_reducer";
import mealInfoReducer from "./meal_info_reducer";
import dayReducer from "./day_reducer";
import userReducer from "./user_reducer";
const RootReducer = combineReducers({
  meals: mealReducer,
  session,
  errors,

  ui: uiReducer,

  selected_day: dayReducer,
  meal_info: mealInfoReducer,
  user: userReducer,
});

export default RootReducer;
