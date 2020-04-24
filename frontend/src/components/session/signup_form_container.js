import { connect } from "react-redux";
import { clearErrors, signup, login } from "../../actions/session_actions";
// import { receiveCurrentStep } from "../../actions/signup_ui_actions";
import MasterSignupForm from "./master_signup_form";
import { errorSelector } from "../../selectors/error_selector";


const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: errorSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user, currentStep) => dispatch(signup(user, currentStep)),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MasterSignupForm);
