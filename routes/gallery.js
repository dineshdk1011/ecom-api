var express = require("express");
var router = express.Router();
const galleryController = require("../controller/Gallery.controller");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", galleryController.create);
router.post("/update", galleryController.update);
router.post("/view", galleryController.view);
router.get("/viewall", galleryController.viewall);
router.post("/destroy", galleryController.destroy);

module.exports = router;
