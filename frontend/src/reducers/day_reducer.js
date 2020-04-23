import {RECEIVE_SELECTED_DAY} from '../actions/day_actions'

const DayReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SELECTED_DAY:
            return action.day;
        default:
            return state;
    }
};

export default DayReducer;