const express = require("express");
const router = express.Router();
const  productsController = require("../controllers/productsController");

router.get("/",productsController.home);
router.get("/productDetail/:id",productsController.detail);
router.get('/dashboard', productsController.dashboard);
router.get("/productCart",productsController.cart);
router.get("/createProduct", productsController.create);
router.get("/editProduct/:id", productsController.edit)
router.get("/dashboard", productsController.dashboard)
router.post("/", uploadFile.single("imagenProducto"), productsController.store);
router.put("/editProduct/:id",uploadFile.single("imagenProducto"), productsController.modify)
router.delete("/dashboard/:id", productsController.delete);

module.exports = router;