import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import mealReducer from "./meal_reducer";
import mealInfoReducer from "./meal_info_reducer";
import dayReducer from "./day_reducer"

const RootReducer = combineReducers({
  meals: mealReducer,
  session,
  errors,
  selected_day: dayReducer,
  meal_info: mealInfoReducer
});

export default RootReducer;
