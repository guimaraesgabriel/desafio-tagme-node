require("./models/RecipesIngredients");
const RecipeIngredient = mongoose.model("RecipeIngredient");

exports.get("/recipeIngredients/:param", (req, res) => {
  RecipeIngredient.find({
    RecipeId: req.params.param,
  })
    .then((response) => {
      return res.json(response);
    })
    .catch((error) => {
      return res.status(400).json({
        error: true,
        message: "Nenhum Ingrediente dessa Receita não foi encontrado.",
      });
    });
});

exports.get("/recipeIngredients/", (req, res) => {
  RecipeIngredient.find()
    .then((response) => {
      return res.json(response);
    })
    .catch((error) => {
      return res.status(400).json({
        error: true,
        message: "Nenhum Ingrediente não foi encontrado.",
      });
    });
});
