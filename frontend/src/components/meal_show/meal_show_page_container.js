import { connect } from "react-redux";
import { fetchMeal } from "../../actions/meal_actions";
import MealShowPage from "./meal_show_page";

const msp = (state) => {
  debugger;
  return {
    meal: state.meals ? Object.values(state.meals)[0] : {},
  };
};

const mdp = (dispatch) => ({
  fetchMeal: (mealId) => dispatch(fetchMeal(mealId)),
});

export default connect(msp, mdp)(MealShowPage);
