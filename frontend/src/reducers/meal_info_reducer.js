import { RECEIVE_MEAL } from "../actions/meal_actions";

const mealInfoReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MEAL:
      return action.meal.data;
    default:
      return state;
  }
};

export default mealInfoReducer;
