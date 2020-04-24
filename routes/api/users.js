const express = require("express");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const axios = require("axios");
const Meal = require("../../models/Meal");

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({ msg: "Success" });
  }
);

//registering a user - INCOMPLETE!
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  let delta;
  if (req.body.targetWeight > req.body.weight) {
    delta = 1000;
  } else if (req.body.targetWeight < req.body.weight) {
    delta = -200;
  } else {
    delta = 0;
  }

  let targetCalories;
  if (req.body.gender === "Male") {
    targetCalories =
      66 +
      6.2 * req.body.weight +
      12.7 * req.body.heightFeet * 12 +
      12.7 * req.body.heightInches -
      6.76 * req.body.age +
      delta;
  } else {
    targetCalories =
      655.1 +
      4.35 * req.body.weight +
      4.7 * req.body.heightFeet * 12 +
      4.7 * req.body.heightInches -
      4.7 * req.body.age +
      delta;
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      // Use the validations to send the error
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        weight: Number(req.body.weight),
        heightFeet: Number(req.body.heightFeet),
        heightInches: req.body.heightInches,
        gender: req.body.gender,
        targetWeight: Number(req.body.targetWeight),
        diet: req.body.diet,
        exclusions: req.body.exclusions,
        targetCalories: targetCalories,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              //console.log(user);
              const payload = { id: user.id, email: user.email };
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
                  diet: user.diet,
                  exclude: user.exclusions.join("%2C "),
                },
              })
                .then((response) => {
                  let counter = 0; 
                  data = response;
                  console.log(data);
                  let meals = data.data.meals;
                  console.log(meals);
                  meals.forEach((meal) => {
                    if (counter < 3){
                    let date = new Date();
                    let new_meal = new Meal({
                      spoonacularMealId: meal.id,
                      title: meal.title,
                      readyInMinutes: meal.readyInMinutes,
                      servings: meal.servings,
                      image: `https://spoonacular.com/recipeImages/${meal.id}-312x231`,
                      mealDate: `${date.getFullYear()}-${
                        date.getMonth() + 1
                      }-${date.getDate()}`,
                      userId: user.id,
                    });
                    new_meal.save();

                    counter += 1; 
                  }
                  });
                  jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn: 3600 },
                    (err, token) => {
                      res.json({
                        success: true,
                        token: "Bearer" + token,
                      });
                    }
                  );
                })
                .catch((error) => {
                  console.log(error);
                });
              
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

//logging in a user
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      // Use the validations to send the error
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = { id: user.id, email: user.email };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});

router.get("/profile/:user_id", (req, res) => {
  const user_id = req.params.user_id;
  User.findById(user_id).then((user) => {
    return res.json(user);
  });
});

module.exports = router;
