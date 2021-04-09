const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const router = express.Router();

app.use(express.json());

app.use((req, res, next) => {
  // res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "http://localhost:8000");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");

  app.use(cors());

  next();
});

mongoose
  .connect("mongodb://localhost/tagme-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexão mongoDB - OK");
  })
  .catch((error) => {
    console.log("Conexão mongoDB - Erro", error);
  });

app.listen(8001, () => {
  console.log("API inicializada. http://localhost:8001/");
});

app.get("/", (req, res) => {
  return res.json({ Status: "OK" });
});

//USER
// const userRoute = require("./routes/userRoute");
// app.use("/user", userRoute);

require("./models/Users");
const User = mongoose.model("User");

app.post("/user/login", (req, res) => {
  User.findOne({
    Username: req.body.Username,
    Password: req.body.Password,
  })
    .then((response) => {
      return res.json(response);
    })
    .catch((error) => {
      return res.status(400).json({
        error: true,
        message: "Usuário não encontrado.",
      });
    });
});

app.get("/user/:id", (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((response) => {
      return res.json(response);
    })
    .catch((error) => {
      return res.status(400).json({
        error: true,
        message: "Usuário não encontrado.",
      });
    });
});

app.get("/user", (req, res) => {
  User.find({})
    .then((list) => {
      return res.json(list);
    })
    .catch((error) => {
      return res.status(400).json({
        error: true,
        message: "Nenhum Usuário encontrado.",
      });
    });
});

app.post("/user", (req, res) => {
  const user = User.create(req.body, (err) => {
    if (err) {
      return res.status(400).json({
        error: true,
        message: "Erro - Usuário não cadastrado.",
      });
    } else {
      return res.status(400).json({
        error: false,
        message: "Usuário cadastrado com sucesso.",
      });
    }
  });
});

app.put("/user/:id", (req, res) => {
  const user = User.updateOne({ _id: req.params.id }, req.body, (err) => {
    if (err) {
      return res.status(400).json({
        error: true,
        message: "Erro - Usuário não atualizado.",
      });
    } else {
      return res.json({
        error: false,
        message: "Usuário atualizado com sucesso.",
      });
    }
  });
});

app.delete("/user/:id", (req, res) => {
  const user = User.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      return res.status(400).json({
        error: true,
        message: "Erro - Usuário não excluído.",
      });
    } else {
      return res.json({
        error: false,
        message: "Usuário excluído com sucesso.",
      });
    }
  });
});
//USER

//RECIPES
// const recipeRoute = require("./routes/recipeRoute");
// app.use("/recipe", recipeRoute);

require("./models/Recipes");
const Recipe = mongoose.model("Recipe");

app.get("/recipe/:id", (req, res) => {
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

app.get("/recipe", (req, res) => {
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
//RECIPES

//RECIPE INGREDIENTS
// const recipeIngredientsRoute = require("./routes/recipeIngredientsRoute");
// app.use("/recipeIngredients", recipeIngredientsRoute);

require("./models/RecipesIngredients");
const RecipeIngredient = mongoose.model("RecipeIngredient");

app.get("/recipeIngredients/:param", (req, res) => {
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

app.get("/recipeIngredients/", (req, res) => {
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
//RECIPE INGREDIENTS

//RECIPE STEPS
// const recipeStepsRoute = require("./routes/recipeStepsRoute");
// app.use("/recipeSteps", recipeStepsRoute);

require("./models/RecipesSteps");
const RecipeStep = mongoose.model("RecipeStep");

app.get("/recipeSteps/:param", (req, res) => {
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

app.get("/recipeSteps/", (req, res) => {
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
//RECIPE STEPS
