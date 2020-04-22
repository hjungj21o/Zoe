const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const axios = require("axios");
const Meal = require("../../models/Meal");

router.get("/user/:user_id/meals/:meal_date", (req, res) => {
  Meal.find({
    userId: req.params.user_id,
    mealDate: req.params.meal_date,
  })
    .then((meals) => {
      if (meals.length > 0) {
        return res.json(meals);
      } else {
        const user = User.findById(req.params.user_id);
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
            targetCalories: user.targetCalories,
            timeFrame: "day",
          },
        })
          .then((response) => {
            data = response;
            console.log(data);
            let meals = data.data.meals;
            console.log(meals);
            const resMeals = [];
            meals.forEach((meal) => {
              let new_meal = new Meal({
                spoonacularMealId: meal.id,
                title: meal.title,
                image: `https://spoonacular.com/recipeImages/${meal.id}-312x231`,
                readyInMinutes: meal.readyInMinutes,
                servings: meal.servings,
                mealDate: req.params.meal_date,
                userId: req.params.user_id,
              });
              resMeals.push(new_meal);
              new_meal.save();
            });
            return res.json(resMeals);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    })
    .catch(() => {});
});

module.exports = router;
