const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const uploadFile = require("../middlewares/multerMid");

router.get("/",productsController.home);
router.get("/productDetail/:id",productsController.detail);
router.get("/productCart",productsController.cart);
router.get("/createProduct", productsController.create);
router.post("/", productsController.store)
router.get("/editProduct", productsController.edit)
router.get("/dashboard", productsController.dashboard)
router.post("/", uploadFile.single("imagenProducto"), productsController.store);
router.get("/editProduct", productsController.edit);

module.exports = router;
