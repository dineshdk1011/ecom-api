var express = require("express");
var router = express.Router();
const JournalController = require("../controller/Journal.controller");

router.post("/create", JournalController.create);
router.post("/update", JournalController.update);
router.post("/view", JournalController.view);
router.get("/viewall", JournalController.viewall);
router.post("/destroy", JournalController.destroy);

module.exports = router;
