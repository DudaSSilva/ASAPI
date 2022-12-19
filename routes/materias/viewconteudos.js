var express = require('express');
var router = express.Router();
const conteudoController = require("../../controllers/conteudoController");

router.get("/", conteudoController.listarConteudos);

module.exports = router;
