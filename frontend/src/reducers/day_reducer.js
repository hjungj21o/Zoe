import { RECEIVE_SELECTED_DAY, CLEAR_SELECTED_DAY } from "../actions/day_actions";

let today = new Date();

const DayReducer = (state = today, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SELECTED_DAY:
      return action.day;
    case CLEAR_SELECTED_DAY: 
      return today;
    default:
      return state;
  }
};

export default DayReducer;
