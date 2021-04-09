require("./models/Users");
const User = mongoose.model("User");

exports.post("/user/login", (req, res) => {
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

exports.get("/user/:id", (req, res) => {
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

exports.get("/user", (req, res) => {
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

exports.post("/user", (req, res) => {
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

exports.put("/user/:id", (req, res) => {
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

exports.delete("/user/:id", (req, res) => {
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
