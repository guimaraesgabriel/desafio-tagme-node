const mongoose = require("mongoose");

const RecipeIngredient = new mongoose.Schema({
  Ingredient: String,
  RecipeId: {
    type: Number,
    required: true,
  },
});

mongoose.model("RecipeIngredient", RecipeIngredient);
