import {RECEIVE_SELECTED_DAY} from '../actions/day_actions'

let today = new Date(); 


const DayReducer = (state = today, action) => {
    Object.freeze(state);
    debugger
    switch (action.type) {
        case RECEIVE_SELECTED_DAY:
            debugger
            
            return action.day;
        default:
            return state;
    }
};

export default DayReducer;