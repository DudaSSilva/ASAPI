const express = require("express");
const router = express.Router();
const conquistasController = require("../../controllers/conquistasController");

router.get("/", conquistasController.list);
router.get("/show/:conquistasId/", conquistasController.show);
router.get("/create/", conquistasController.create);
router.post("/create/", conquistasController.create);
router.post("/:conquistasId/update", conquistasController.update);
router.get("/:conquistasId/update", conquistasController.update);
router.get("/:conquistasId/delete", conquistasController.delete);

module.exports = router;