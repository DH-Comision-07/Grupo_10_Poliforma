const express = require("express");
const router = express.Router();
const  productsController = require("../controllers/productsController");

router.get("/",(req,res)=>res.send("todos los productos"));
router.get("/productDetail",productsController.getDetail);
router.get("/productCart",productsController.getCart);
router.get("/createProduct", productsController.getCreate);
router.get("/editProduct", productsController.getEdit)

module.exports = router;
