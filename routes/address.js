var express = require("express");
var router = express.Router();
const AddressController = require("../controller/Address.controller");


router.post("/create", AddressController.create);
router.post("/update", AddressController.update);
router.post("/view", AddressController.view);
router.get("/viewall", AddressController.viewall);
router.post("/destroy", AddressController.destroy);

module.exports = router;
