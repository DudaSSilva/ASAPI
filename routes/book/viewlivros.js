var express = require('express');
var router = express.Router();
const livrosController = require("../../controllers/livrosController");

router.get("/", livrosController.listarLivros);

module.exports = router;