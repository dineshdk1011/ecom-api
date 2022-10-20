var express = require("express");
var router = express.Router();
const navBarController = require("../controller/Navbar.controller");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", navBarController.create);
router.post("/update", navBarController.update);
router.get("/viewall", navBarController.viewall);
router.post("/destroy", navBarController.destroy);
router.post("/viewbystore", navBarController.viewbystore);

module.exports = router;
