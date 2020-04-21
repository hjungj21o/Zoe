const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
  mealId: {
    type: Schema.Types.ObjectId,
    ref: "meals",
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  amountValue: {
    type: Number,
    required: false,
  },
  amountUnit: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

module.exports = Ingredient = mongoose.model("Ingredient", IngredientSchema);
