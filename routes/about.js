var express = require("express");
var router = express.Router();
const AboutController = require("../controller/About.controller");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", AboutController.create);
router.post("/update", AboutController.update);
router.post("/view", AboutController.view);
router.get("/viewall", AboutController.viewall);
router.post("/destroy", AboutController.destroy);

module.exports = router;
