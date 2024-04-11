const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const uploadFile = require("../middlewares/multerMid");

router.get("/",productsController.home);
router.get("/productDetail",productsController.detail);
router.get("/productCart",productsController.cart);
router.get("/createProduct", productsController.create);
router.get("/editProduct/:id", productsController.edit)
router.get("/dashboard", productsController.dashboard)
router.post("/", uploadFile.single("imagenProducto"), productsController.store);
router.put("/editProduct/:id",uploadFile.single("imagenProducto"), productsController.modify)
module.exports = router;
