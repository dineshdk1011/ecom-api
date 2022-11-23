var express = require("express");
var router = express.Router();
const CouponController = require("../controller/Coupon.controller");


router.post("/create", CouponController.create);
router.post("/update", CouponController.update);
router.post("/view", CouponController.view);
router.get("/viewall", CouponController.viewall);
router.post("/destroy", CouponController.destroy);

module.exports = router;
