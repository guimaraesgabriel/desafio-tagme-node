const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.status(200).send({
    Title: "Desafio TagMe Node",
    Version: "0.0.1",
    Status: "OK",
  });
});

module.exports = router;
