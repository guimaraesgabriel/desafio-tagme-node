require("./models/Recipes");
const Recipe = mongoose.model("Recipe");

exports.get("/recipe/:id", (req, res) => {
  Recipe.findOne({ _id: req.params.id })
    .then((response) => {
      return res.json(response);
    })
    .catch((error) => {
      return res.status(400).json({
        error: true,
        message: "Receita não encontrada.",
      });
    });
});

exports.get("/recipe", (req, res) => {
  Recipe.find({})
    .then((list) => {
      return res.json(list);
    })
    .catch((error) => {
      return res.status(400).json({
        error: true,
        message: "Nenhuma Receita encontrada.",
      });
    });
});
