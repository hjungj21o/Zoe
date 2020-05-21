import {RECEIVE_EDIT_ERRORS, CLEAR_EDIT_ERRORS} from '../actions/user_actions'

export default function (state = {}, action) {
    switch (action.type) {
        case RECEIVE_EDIT_ERRORS:
            return action.errors
        case CLEAR_EDIT_ERRORS:
            return {};
        default:
            return state;
    }
}