const express = require("express");
const router = express.Router();
const axios = require("axios");
let data;
router.get("/test", (req, res) => res.json({ msg: "This is the meals route" }));
axios({
    "method": "GET",
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate",
    "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.API_KEY
    }, "params": {
        "targetCalories": "2000",
        "timeFrame": "day"
    }
})
    .then((response) => {
        data = response;
        let meal_ingredients;
        let meals = data.data.meals;
        meals.forEach(meal => {
            let meal_id = meal.id;
            axios({
                "method": "GET",
                "url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${meal_id}/ingredientWidget.json`,
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                    "x-rapidapi-key": process.env.API_KEY
                }
            })
                .then((response) => {
                    meal_ingredients = response;
                    console.log(meal)
                    console.log(meal_ingredients.data.ingredients)
                    console.log('break between each meal')
                    //save to meal DB at this point using the meal and the meal_ingredients
                    // let new_meal = new Meal ({
                    //     //schema details 
                    // })
                    //new_meal.save(); 
                })
                .catch((error) => {
                    console.log(error)
                })
        })
    })
    .catch((error) => {
        console.log(error)
    })
module.exports = router;