var express = require('express');
var router = express.Router();

const PageController = require('../controller/Page.controller')

router.post('/create', PageController.create)
router.post('/update', PageController.update)
router.get('/view', PageController.view)
router.get('/viewall', PageController.viewall)
router.post('/destroy', PageController.destroy)


module.exports = router;
