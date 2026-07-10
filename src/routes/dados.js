var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.post("/cadastrar", function (req, res) {

    dadosController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {

    dadosController.listar(req, res);
});

module.exports = router;