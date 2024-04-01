const express = require("express");
const router = express.Router();
const  productsController = require("../controllers/productsController");

router.get("/",(req,res)=>res.send("todos los productos"));
router.get("/productDetail",productsController.detail);
router.get("/productCart",productsController.cart);
router.get("/createProduct", productsController.create);
router.post("/", productsController.store)
router.get("/editProduct", productsController.edit)

module.exports = router;
