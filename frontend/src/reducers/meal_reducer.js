import { RECEIVE_USER_MEALS, CLEAR_MEALS } from "../actions/meal_actions";


const mealReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_MEALS:
      return action.meals.data;
    case CLEAR_MEALS:
      return []; 
    default:
      return state;
  }
};

export default mealReducer;
