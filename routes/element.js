var express = require('express');
var router = express.Router();

const ElementController = require('../controller/Element.controller')

router.post('/create', ElementController.create)
router.post('/update', ElementController.update)
router.get('/view', ElementController.view)
router.get('/viewall', ElementController.viewall)
router.post('/destroy', ElementController.destroy)


module.exports = router;
