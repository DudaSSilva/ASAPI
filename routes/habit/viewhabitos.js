var express = require('express');
var router = express.Router();
const habitosController = require("../../controllers/habitosController");

router.get("/", habitosController.listarHabitos);

module.exports = router;
