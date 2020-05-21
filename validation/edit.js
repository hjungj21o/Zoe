const Validator = require("validator");
const validText = require("./valid-text");
const validNum = require("./valid-num");

//                
//                     diet: this.state.diet,
//                         //target calories, 
//                         exclusions: this.state.exclusions
module.exports = function validateUpdateInput(data){
    let errors = {};

    data.name = validText(data.name) ? data.name : "";
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

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
}