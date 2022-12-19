const express = require("express");
const router = express.Router();
const flashcardsController = require("../../controllers/flashcardsController");

router.get("/", flashcardsController.list);
router.get("/show/:flashcardsId/", flashcardsController.show);
router.get("/create/", flashcardsController.create);
router.post("/create/", flashcardsController.create);
router.post("/:flashcardsId/update", flashcardsController.update);
router.get("/:flashcardsId/update", flashcardsController.update);
router.get("/:flashcarsdId/delete", flashcardsController.delete);

module.exports = router;