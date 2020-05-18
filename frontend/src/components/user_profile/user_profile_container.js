import { connect } from "react-redux";
import { getUserProfile, editUserProfile } from "../../actions/user_actions";
import UserProfile from "./user_profile";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserProfile: (id) => dispatch(getUserProfile(id)),
    editUserProfile: (id, userData) => dispatch(editUserProfile(id, userData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
