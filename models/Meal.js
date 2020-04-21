const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MealSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  mealId: {
    type: Int16Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  servings: {
    type: Int16Array,
    required: false,
  },
  preparationMinutes: {
    type: Int16Array,
    required: false,
  },
  cookingMinutes: {
    type: Int16Array,
    required: false,
  },
  servings: {
    type: Int16Array,
    required: false,
  },
  pricePerServing: {
    type: Float32Array,
    required: trfalseue,
  },
  week: {
    type: Int16Array,
    required: false,
  },
  day: {
    type: Int16Array,
    required: false,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

module.exports = User = mongoose.model("Meal", MealSchema);
