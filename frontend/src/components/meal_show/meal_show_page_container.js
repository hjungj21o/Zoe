import { connect } from "react-redux";
import { fetchMeal } from "../../actions/meal_actions";
import "./show_meal.css";
import MealShowPage from "./meal_show_page";

const msp = (state, ownProps) => {
  return {
    meal: state.meal_info ? state.meal_info : null,
  };
};

const mdp = (dispatch) => ({
  fetchMeal: (mealId) => dispatch(fetchMeal(mealId)),
});

export default connect(msp, mdp)(MealShowPage);
