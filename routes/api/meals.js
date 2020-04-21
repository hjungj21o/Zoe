const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Meal = require('../../models/Meal');

router.get("user/:user_id/meals", (req, res) => {
    Meal.find()
        .then(meals => res.json(meals))
        .catch(err => res.status(404).json({ nomealsfound: 'No meals found'}));
});

module.exports = router;
