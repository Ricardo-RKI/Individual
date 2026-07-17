var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/linhaTempo/:id_usuario", function (req, res) {

    dashboardController.linhaTempo(req, res);
});

router.get("/listar/:id_usuario", function (req, res) {

    dashboardController.listar(req, res);
});

module.exports = router;