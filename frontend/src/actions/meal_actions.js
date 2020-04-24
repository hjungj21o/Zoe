import * as MEALUtil from "../util/meal_util";

export const RECEIVE_USER_MEALS = "RECEIVE_USER_MEALS";
export const RECEIVE_MEAL = "RECEIVE_MEAL";

export const receiveUserMeals = (meals) => ({
  type: RECEIVE_USER_MEALS,
  meals,
});

export const receiveMeal = (meal) => ({
  type: RECEIVE_MEAL,
  meal,
});

export const fetchUserMeals = (data) => {
  return (dispatch) => {
    return MEALUtil.getUserMeals(data)
      .then((meals) => dispatch(receiveUserMeals(meals)))
      .catch((err) => console.log(err));
  };
};

export const fetchMeal = (mealId) => {
  return (dispatch) => {
    return MEALUtil.getMeal(mealId)
      .then((meal) => dispatch(receiveMeal(meal)))
      .catch((err) => console.log(err));
  };
};

// export const createNewMeals = (data) => (dispatch) =>
//   MEALUtil.createMeals(data)
//     .then((meals) => dispatch(receiveNewMeals(meals)))
//     .catch((err) => console.log(err));
