const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  heightFeet: {
    type: Number,
    required: true,
  },
  heightInches: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  diet: {
    type: String,
  },
  exclusions: {
    type: Array,
  },
  targetWeight: {
    type: Number,
    required: true,
  },
  mealPlan: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("User", UserSchema);
