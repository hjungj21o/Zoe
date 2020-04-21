const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    index: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
  },
  heightFeet: {
    type: Number,
  },
  heightInches: {
    type: Number,
  },
  gender: {
    type: String,
  },
  age: {
    type: Number,
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
  
});

module.exports = User = mongoose.model("User", UserSchema);


// To maintain your weight:
// Daily_calories = Weigh_in_lb * 0.453592 * 23  Cal/day

// To lose Weight:
// Daily_calories - 600

// To gain Weight:
// Daily_calories + 600
