import { connect } from "react-redux";
import { logout, clearErrors } from "../actions/session_actions";
import {clearMeals} from '../actions/meal_actions'
import { login } from "../actions/session_actions";

import NavBar from "./navbar";

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
  userId: state.session.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  logout: () => dispatch(logout()),
  clearMeals: () => dispatch(clearMeals()),
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
