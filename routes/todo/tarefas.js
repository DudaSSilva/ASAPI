const express = require("express");
const router = express.Router();
const tarefasController = require("../../controllers/tarefasController");

router.get("/", tarefasController.list);
router.get("/show/:tarefaId/", tarefasController.show);
router.get("/create/", tarefasController.create);
router.post("/create/", tarefasController.create);
router.post("/:tarefaId/update", tarefasController.update);
router.get("/:tarefaId/update", tarefasController.update);
router.get("/:tarefaId/delete", tarefasController.delete);

module.exports = router;