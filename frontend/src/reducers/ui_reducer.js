import { RECEIVE_CURRENT_STEP } from '../actions/signup_ui_actions';
// const _nullErrors = [];
const initialState = {
  signup: {
    currentStep: 1
  }
};
const UiReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_STEP:
      return Object.assign({}, state, {signup: {currentStep: action.step }});
    default:
      return state;
  }
};

export default UiReducer;
