import { RECEIVE_USER_MEALS } from "../actions/meal_actions";

const mealReducer = (state = {}, action) => {
  debugger;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_MEALS:
      return action.meals.data;
    default:
      return state;
  }
};

export default mealReducer;
