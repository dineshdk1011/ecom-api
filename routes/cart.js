var express = require('express');
var router = express.Router();

const CartController = require('../controller/Cart.controller')

router.post('/create', CartController.create)
router.post('/update', CartController.update)
router.get('/view', CartController.view)
router.get('/viewall', CartController.viewall)
router.post('/destroy', CartController.destroy)
router.post('/mycart', CartController.mycart)




module.exports = router;
