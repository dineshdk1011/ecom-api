var express = require("express");
var router = express.Router();

const OrderController = require("../controller/Order.controller");

router.post("/create", OrderController.create);
router.post("/update", OrderController.update);
router.get("/view", OrderController.view);
router.get("/viewall", OrderController.viewall);
router.post("/destroy", OrderController.destroy);
router.post("/payment", OrderController.Payment);

module.exports = router;
