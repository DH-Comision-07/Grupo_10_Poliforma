const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get("/",productsController.home);
router.get("/productDetail",productsController.getDetail);
router.get("/productCart",productsController.getCart);

module.exports = router;
