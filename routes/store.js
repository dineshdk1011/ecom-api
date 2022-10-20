var express = require("express");
var router = express.Router();

const StoreController = require("../controller/Store.controller");

router.post("/create", StoreController.create);
router.post("/update", StoreController.update);
router.get("/view", StoreController.view);
router.get("/viewall", StoreController.viewall);
router.post("/viewbyuser", StoreController.viewbyuser);
router.post("/destroy", StoreController.destroy);

module.exports = router;
