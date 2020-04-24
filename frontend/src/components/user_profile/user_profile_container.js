import { connect } from "react-redux";
import { getUserProfile } from "../../actions/user_actions";
import UserProfile from "./user_profile";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserProfile: (id) => dispatch(getUserProfile(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
