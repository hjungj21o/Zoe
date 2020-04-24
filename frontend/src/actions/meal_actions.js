import * as MEALUtil from "../util/meal_util";

export const RECEIVE_USER_MEALS = "RECEIVE_USER_MEALS";
// export const RECEIVE_NEW_MEALS = "RECEIVE_NEW_MEALS";

export const receiveUserMeals = (meals) => ({
  type: RECEIVE_USER_MEALS,
  meals,
});

// export const receiveNewMeals = (meals) => ({
//         type: RECEIVE_NEW_MEALS,
//         meals,
// });

export const fetchUserMeals = (data) => {
  return (dispatch) => {
    return MEALUtil.getUserMeals(data)
      .then((meals) => dispatch(receiveUserMeals(meals)))
      .catch((err) => console.log(err));
  };
};
// export const createNewMeals = (data) => (dispatch) =>
//   MEALUtil.createMeals(data)
//     .then((meals) => dispatch(receiveNewMeals(meals)))
//     .catch((err) => console.log(err));
