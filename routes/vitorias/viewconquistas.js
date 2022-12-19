var express = require('express');
var router = express.Router();
const conquistasController = require("../../controllers/conquistasController");

router.get("/", conquistasController.listarConquistas);

module.exports = router;