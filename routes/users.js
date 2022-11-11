var express = require("express");
var router = express.Router();

const userController = require("../controller/User.controller");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", userController.create);
router.post("/update", userController.update);
router.get("/view", userController.view);
router.get("/viewall", userController.viewall);
router.post("/destroy", userController.destroy);
router.post("/myorder", userController.Myorder);
router.post("/Myorder_store", userController.Myorder_store);
router.post("/Completedorder", userController.Completedorder);
router.post("/Pendingorder", userController.Pendingorder);
router.post("/Processingorder", userController.Processingorder);
router.post("/Cancelorder",userController.Cancelorder)
router.post("/login", userController.login);
router.post("/viewUser", userController.viewUser);

module.exports = router;
