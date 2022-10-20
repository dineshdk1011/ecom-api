var express = require("express");
var router = express.Router();
const productController = require("../controller/Product.controller");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", productController.create);
router.post("/update", productController.update);
router.post("/view", productController.view);
router.post("/view_by_slug", productController.view_by_slug);
router.get("/viewall", productController.viewall);
router.post("/destroy", productController.destroy);
router.post("/viewsingle", productController.viewsingle);
router.post("/viewbystore", productController.viewbystore);
router.post("/updatestock", productController.updatestock);

module.exports = router;
