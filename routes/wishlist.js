var express = require('express');
var router = express.Router();

const WishlistController = require('../controller/Wishlist.controller')

router.post('/create', WishlistController.create)
router.post('/update', WishlistController.update)
router.get('/view', WishlistController.view)
router.get('/viewall', WishlistController.viewall)
router.post('/destroy', WishlistController.destroy)
router.post('/mywishlist', WishlistController.mywishlist)


module.exports = router;
