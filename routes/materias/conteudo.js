const express = require("express");
const router = express.Router();
const conteudosController = require("../../controllers/conteudoController");

router.get("/", conteudosController.list);
router.get("/show/:conteudoId/", conteudosController.show);
router.get("/create/", conteudosController.create);
router.post("/create/", conteudosController.create);
router.post("/:conteudoId/update", conteudosController.update);
router.get("/:conteudoId/update", conteudosController.update);
router.get("/:conteudoId/delete", conteudosController.delete);

module.exports = router;