require("./models/RecipesSteps");
const RecipeStep = mongoose.model("RecipeStep");

exports.get("/recipeSteps/:param", (req, res) => {
  RecipeStep.find({
    RecipeId: req.params.param,
  })
    .then((response) => {
      return res.json(response);
    })
    .catch((error) => {
      return res.status(400).json({
        error: true,
        message: "Nenhum Passo dessa Receita não foi encontrado.",
      });
    });
});

exports.get("/recipeSteps/", (req, res) => {
  RecipeStep.find()
    .then((response) => {
      return res.json(response);
    })
    .catch((error) => {
      return res.status(400).json({
        error: true,
        message: "Nenhum Passo foi encontrado.",
      });
    });
});
