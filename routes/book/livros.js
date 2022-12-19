const express = require("express");
const router = express.Router();
const livrosController = require("../../controllers/livrosController");

router.get("/", livrosController.list);
router.get("/show/:livrosId/", livrosController.show);
router.get("/create/", livrosController.create);
router.post("/create/", livrosController.create);
//router.post("/:livrosId/update", livrosController.update);
//router.get("/:livrosId/update", livrosController.update);
router.get("/:livrosId/delete", livrosController.delete);

module.exports = router;