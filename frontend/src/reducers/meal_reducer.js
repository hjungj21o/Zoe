import { RECEIVE_USER_MEALS, RECEIVE_MEAL } from "../actions/meal_actions";

const mealReducer = (state = [], action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_MEALS:
      return action.meals.data;
    case RECEIVE_MEAL:
      return Object.assign({}, state, {
        [action.meal.data.mealId]: action.meal.data,
      });
    default:
      return state;
  }
};

export default mealReducer;
