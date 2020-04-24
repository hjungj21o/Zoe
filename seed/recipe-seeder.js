const Meal = require('../models/Meal'); 
const User = require('../models/User')
const db = require("../config/keys").mongoURI;
let mongoose = require('mongoose'); 
const axios = require('axios');
const _ = require('lodash');

function exit() {
    mongoose.disconnect().then(() => console.log("mongodb disconnected"))
        .catch(error => console.log(error));
}

const successCallback = () => {
    console.log("successful connection!");
    let user = User.find().sort({ _id: -1 }).limit(1)
        .then((user)=>{
            const today = new Date()
            const tomorrow = new Date(today)
            tomorrow.setDate(tomorrow.getDate() + 1)

            const two_days = new Date(tomorrow)
            two_days.setDate(two_days.getDate() + 1)

            const three_days = new Date(two_days)
            three_days.setDate(three_days.getDate() + 1)

            const four_days = new Date(three_days); 
            four_days.setDate(four_days.getDate() + 1 ); 


            let id = user[0]._id; 
            let meals = [
                new Meal ({
                    userId: id,
                    spoonacularMealId: 886913,
                    title: 'Seed: Jos test Parfait(Paleo, GF, Dairy- Free + Refined Sugar - Free)',
                    image: "https://spoonacular.com/recipeImages/886913-312x231",
                    createdAt: `${tomorrow.getFullYear()}-${tomorrow.getMonth()}-${tomorrow.getDate()}`,
                    servings: 4, 
                    preparationMinutes: 5, 
                    cookingMinutes: 45, 
                    pricePerServing: 32.58,
                }), 
                new Meal ({
                    userId: id,
                    spoonacularMealId: 174214,
                    title: 'Seed: Honey Garlic Balsamic Chicken Breasts',
                    image: "https://spoonacular.com/recipeImages/174214-312x231",
                    createdAt: `${tomorrow.getFullYear()}-${tomorrow.getMonth()}-${tomorrow.getDate()}`,
                    servings: 4,
                    preparationMinutes: 5,
                    cookingMinutes: 45,
                    pricePerServing: 32.58,

                }), 
                new Meal({
                    userId: id,
                    spoonacularMealId: 886913,
                    title: 'Seed: Jos test Parfait(Paleo, GF, Dairy- Free + Refined Sugar - Free)',
                    image: "https://spoonacular.com/recipeImages/886913-312x231",
                    createdAt: `${tomorrow.getFullYear()}-${tomorrow.getMonth()}-${tomorrow.getDate()}`,
                    servings: 4,
                    preparationMinutes: 5,
                    cookingMinutes: 45,
                    pricePerServing: 32.58,

                }), 
                new Meal({
                    userId: id,
                    spoonacularMealId: 886913,
                    title: 'Seed: Jos test Parfait(Paleo, GF, Dairy- Free + Refined Sugar - Free)',
                    image: "https://spoonacular.com/recipeImages/886913-312x231",
                    createdAt: `${two_days.getFullYear()}-${two_days.getMonth()}-${two_days.getDate()}`,
                    servings: 4,
                    preparationMinutes: 5,
                    cookingMinutes: 45,
                    pricePerServing: 32.58,

                }), 
                new Meal({
                    userId: id,
                    spoonacularMealId: 886913,
                    title: 'Seed: Jos test Parfait(Paleo, GF, Dairy- Free + Refined Sugar - Free)',
                    image: "https://spoonacular.com/recipeImages/886913-312x231",
                    createdAt: `${two_days.getFullYear()}-${two_days.getMonth()}-${two_days.getDate()}`,
                    servings: 4,
                    preparationMinutes: 5,
                    cookingMinutes: 45,
                    pricePerServing: 32.58,

                }), 
                new Meal({
                    userId: id,
                    spoonacularMealId: 886913,
                    title: 'Seed: Jos test Parfait(Paleo, GF, Dairy- Free + Refined Sugar - Free)',
                    image: "https://spoonacular.com/recipeImages/886913-312x231",
                    createdAt: `${two_days.getFullYear()}-${two_days.getMonth()}-${two_days.getDate()}`,
                    servings: 4,
                    preparationMinutes: 5,
                    cookingMinutes: 45,
                    pricePerServing: 32.58,

                }), 
                new Meal({
                    userId: id,
                    spoonacularMealId: 886913,
                    title: 'Seed: Jos test Parfait(Paleo, GF, Dairy- Free + Refined Sugar - Free)',
                    image: "https://spoonacular.com/recipeImages/886913-312x231",
                    createdAt: `${three_days.getFullYear()}-${three_days.getMonth()}-${three_days.getDate()}`,
                    servings: 4,
                    preparationMinutes: 5,
                    cookingMinutes: 45,
                    pricePerServing: 32.58,

                }), 
                new Meal({
                    userId: id,
                    spoonacularMealId: 886913,
                    title: 'Seed: Jos test Parfait(Paleo, GF, Dairy- Free + Refined Sugar - Free)',
                    image: "https://spoonacular.com/recipeImages/886913-312x231",
                    createdAt: `${three_days.getFullYear()}-${three_days.getMonth()}-${three_days.getDate()}`,
                    servings: 4,
                    preparationMinutes: 5,
                    cookingMinutes: 45,
                    pricePerServing: 32.58,

                }), 
                new Meal({
                    userId: id,
                    spoonacularMealId: 886913,
                    title: 'Seed: Jos test Parfait(Paleo, GF, Dairy- Free + Refined Sugar - Free)',
                    image: "https://spoonacular.com/recipeImages/886913-312x231",
                    createdAt: `${three_days.getFullYear()}-${three_days.getMonth()}-${three_days.getDate()}`,
                    servings: 4,
                    preparationMinutes: 5,
                    cookingMinutes: 45,
                    pricePerServing: 32.58,

                }), 
                new Meal({
                    userId: id,
                    spoonacularMealId: 886913,
                    title: 'Seed: Jos test Parfait(Paleo, GF, Dairy- Free + Refined Sugar - Free)',
                    image: "https://spoonacular.com/recipeImages/886913-312x231",
                    createdAt: `${four_days.getFullYear()}-${four_days.getMonth()}-${four_days.getDate()}`,
                    servings: 4,
                    preparationMinutes: 5,
                    cookingMinutes: 45,
                    pricePerServing: 32.58,

                }), 
                new Meal({
                    userId: id,
                    spoonacularMealId: 886913,
                    title: 'Seed: Jos test Parfait(Paleo, GF, Dairy- Free + Refined Sugar - Free)',
                    image: "https://spoonacular.com/recipeImages/886913-312x231",
                    createdAt: `${four_days.getFullYear()}-${four_days.getMonth()}-${four_days.getDate()}`,
                    servings: 4,
                    preparationMinutes: 5,
                    cookingMinutes: 45,
                    pricePerServing: 32.58,

                }), 
                new Meal({
                    userId: id,
                    spoonacularMealId: 886913,
                    title: 'Seed: Jos test Parfait(Paleo, GF, Dairy- Free + Refined Sugar - Free)',
                    image: "https://spoonacular.com/recipeImages/886913-312x231",
                    createdAt: `${four_days.getFullYear()}-${four_days.getMonth()}-${four_days.getDate()}`,
                    servings: 4,
                    preparationMinutes: 5,
                    cookingMinutes: 45,
                    pricePerServing: 32.58,

                }),
            ]; 

            let done = 0; 
            for (let i = 0; i < meals.length; i++) {
                meals[i].save().then((err, result) => {
                    done++; 
                    if (done === meals.length) {
                        console.log('hi')
                        exit(); 
                    }

                }); 
            }

        });
    
}




//Draw data from 
//Connect to the main DB (will seed by running node recipe-seeder.js)
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(successCallback)
    .catch((err) => console.log(err));


