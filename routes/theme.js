var express = require("express");
var router = express.Router();
const ThemeController = require("../controller/Theme.controller");

router.post("/create", ThemeController.create);
router.post("/update", ThemeController.update);
router.post("/view", ThemeController.view);
router.get("/viewall", ThemeController.viewall);
router.post("/destroy", ThemeController.destroy);

module.exports = router;
