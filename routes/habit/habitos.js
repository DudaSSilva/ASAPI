const express = require("express");
const router = express.Router();
const habitosController = require("../../controllers/habitosController");

router.get("/", habitosController.list);
router.get("/show/:habitosId/", habitosController.show);
router.get("/create/", habitosController.create);
router.post("/create/", habitosController.create);
router.post("/:habitosId/update", habitosController.update);
router.get("/:habitosId/update", habitosController.update);
router.get("/:habitosId/delete", habitosController.delete);

module.exports = router;