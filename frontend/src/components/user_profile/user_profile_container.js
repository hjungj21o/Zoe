import { connect } from "react-redux";
import { getUserProfile, editUserProfile, clearEditErrors, receiveEditErrors } from "../../actions/user_actions";
import UserProfile from "./user_profile";
import {updateErrorSelector} from '../../selectors/update_error_selector'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    edit_errors: updateErrorSelector(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserProfile: (id) => dispatch(getUserProfile(id)),
    editUserProfile: (id, userData) => dispatch(editUserProfile(id, userData)), 
    clearEditErrors: () => dispatch(clearEditErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
