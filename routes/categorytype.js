var express = require('express');
var router = express.Router();

const CategoryTypeController = require('../controller/CategoryType.controller')

router.post('/create', CategoryTypeController.create)
router.post('/update', CategoryTypeController.update)
router.get('/view', CategoryTypeController.view)
router.get('/viewall', CategoryTypeController.viewall)
router.post('/destroy', CategoryTypeController.destroy)
router.post('/categoryproduct',CategoryTypeController.categoryproduct)

module.exports = router;
