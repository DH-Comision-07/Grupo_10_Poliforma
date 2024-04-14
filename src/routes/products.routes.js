const express = require("express");
const router = express.Router();
const  productsController = require("../controllers/productsController");

router.get("/",productsController.home);
router.get("/productDetail/:id",productsController.detail);
router.get('/dashboard', productsController.dashboard);
router.get("/productCart",productsController.cart);
router.get("/createProduct", productsController.create);
router.post("/", productsController.store);
router.get("/editProduct", productsController.edit);
router.delete("/dashboard/:id", productsController.delete);

module.exports = router;