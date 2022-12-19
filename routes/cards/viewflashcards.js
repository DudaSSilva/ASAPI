var express = require('express');
var router = express.Router();
const flashcardsController = require("../../controllers/flashcardsController");

router.get("/", flashcardsController.listarFlashcards);

module.exports = router;
