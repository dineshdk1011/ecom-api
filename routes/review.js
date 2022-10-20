var express = require('express');
var router = express.Router();

const ReviewController = require('../controller/Review.controller')

router.post('/create', ReviewController.create)
router.post('/update', ReviewController.update)
router.get('/view', ReviewController.view)
router.get('/viewall', ReviewController.viewall)
router.post('/destroy', ReviewController.destroy)
router.get('/myreview', ReviewController.Myreview)



module.exports = router;
