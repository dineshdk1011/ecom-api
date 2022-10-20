var express = require("express");
var router = express.Router();

const CategoryController = require("../controller/Category.controller");

router.post("/create", CategoryController.create);
router.post("/update", CategoryController.update);
router.get("/view", CategoryController.view);
router.post("/view_by_slug", CategoryController.view_by_slug);
router.get("/viewall", CategoryController.viewall);
router.post("/destroy", CategoryController.destroy);
router.post("/categoryproduct", CategoryController.categoryproduct);
router.post("/storecategory", CategoryController.Storecategory);

module.exports = router;
