const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const uploadFile = require("../middlewares/multerMid");

router.get("/",(req,res)=>res.send("todos los productos"));
router.get("/productDetail",productsController.detail);
router.get("/productCart",productsController.cart);
router.get("/createProduct", productsController.create);
router.post("/", uploadFile.single("imagenProducto"), productsController.store);
router.get("/editProduct", productsController.edit);

module.exports = router;
