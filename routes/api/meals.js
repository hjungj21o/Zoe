const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const axios = require("axios");
const Meal = require("../../models/Meal");

router.get("user/:user_id/meals", (req, res) => {
  debugger;
  Meal.find({ userId: req.params.user_id, createdAt: req.body.createdAt })
    .then((meals) => res.json(meals))
    .catch(() => {
      axios({
        method: "GET",
        url:
          "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key": process.env.API_KEY,
        },
        params: {
          targetCalories,
          timeFrame: "day",
        },
      })
        .then((response) => {
          data = response;
          console.log(data);
          let meals = data.data.meals;
          console.log(meals);
          meals.forEach((meal) => {
            let new_meal = new Meal({
              spoonacularMealId: meal.id,
              title: meal.title,
              image: `https://spoonacular.com/recipeImages/${meal.id}-312x231`,
              createdAt: req.body.createdAt,
            });
            new_meal.save();
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
});

module.exports = router;
