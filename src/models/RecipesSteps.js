const mongoose = require("mongoose");

const RecipeStep = new mongoose.Schema({
  Order: Number,
  Step: String,
  RecipeId: {
    type: Number,
    required: true,
  },
});

mongoose.model("RecipeStep", RecipeStep);
