const Validator = require("validator");
const validText = require("./valid-text");
const validNum = require("./valid-num");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";
  data.password2 = validText(data.password2) ? data.password2 : "";
  data.name = validText(data.name) ? data.name : "";
  data.gender = validText(data.gender) ? data.gender : "";
  data.age = validNum(Number(data.age)) ? Number(data.age) : 0;
  data.weight = validNum(Number(data.weight)) ? Number(data.weight) : 0;
  data.heightFeet = validNum(Number(data.heightFeet))
    ? Number(data.heightFeet)
    : 0;
  data.heightInches = validNum(Number(data.heightInches))
    ? Number(data.heightInches)
    : 0;
  data.targetWeight = validNum(Number(data.targetWeight))
    ? Number(data.targetWeight)
    : 0;

  if (data.name.length === 0) {
    errors.name = "Name is required";
  }

  if (Validator.isEmpty(data.gender)) {
    errors.gender = "Gender field is required";
  }

  if (!Number.isInteger(data.age)) {
    errors.age = "Age must be an integer";
  }

  if (data.age < 1 || data.age > 99) {
    errors.age = "Age must be between 1 and 99 years old";
  }

  if (!Number.isInteger(data.weight)) {
    errors.weight = "Weight must be an integer";
  }

  if (data.weight < 1 || data.weight > 999) {
    errors.weight = "Weight must be between 1 and 999 lbs";
  }

  if (
    !Number.isInteger(data.heightFeet) ||
    !Number.isInteger(data.heightInches)
  ) {
    errors.heightFeet = "Height must be an integer";
    errors.heightInches = "Height must be an integer";
  }

  if (data.heightFeet > 9) {
    errors.heightFeet = "You can't possibly be taller than 9 ft";
  }

  if (data.heightFeet < 1) {
    errors.heightFeet = "Are you really less than 1 foot tall?";
  }

  if (data.heightInches > 11 || data.heightInches < 0) {
    errors.heightFeet = "Inches must be between 0 and 11";
  }

  if (!Number.isInteger(data.targetWeight)) {
    errors.targetWeight = "Target weight must be an integer";
  }

  if (data.targetWeight < 1 || data.targetWeight > 999) {
    errors.targetWeight = "Target weight must be between 1 and 999 lbs";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
