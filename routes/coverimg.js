var express = require("express");
var router = express.Router();
const CoverimgController = require("../controller/Coverimg.controller");


router.post("/create", CoverimgController.create);
router.post("/update", CoverimgController.update);
router.post("/view", CoverimgController.view);
router.get("/viewall", CoverimgController.viewall);
router.post("/destroy", CoverimgController.destroy);

module.exports = router;
