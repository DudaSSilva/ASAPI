var express = require('express');
var router = express.Router();
const tarefasController = require("../../controllers/tarefasController");

router.get("/", tarefasController.listarTarefas);

module.exports = router;
