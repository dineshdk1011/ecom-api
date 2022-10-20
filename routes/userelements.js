var express = require("express");
var router = express.Router();

const UserelementController = require("../controller/Userelement.controller");

router.post("/create", UserelementController.create);
router.post("/update", UserelementController.update);
router.post("/view", UserelementController.view);
router.get("/viewall", UserelementController.viewall);
router.post("/destroy", UserelementController.destroy);

module.exports = router;
