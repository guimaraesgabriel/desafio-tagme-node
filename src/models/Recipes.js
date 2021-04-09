const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Recipe = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    ImageURL: {
      type: String,
      required: true,
    },
    PreparationTime: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

mongoose.model("Recipe", Recipe);
