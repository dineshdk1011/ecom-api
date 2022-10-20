var express = require("express");
var router = express.Router();
const variationController = require("../controller/Variation.controller");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", variationController.create);
router.post("/update", variationController.update);
router.post("/view", variationController.view);
router.get("/viewall", variationController.viewall);
router.post("/destroy", variationController.destroy);
router.post("/viewVariation", variationController.viewVariation);

module.exports = router;
