const express = require("express");
const router = express.Router();
const  productsController = require("../controllers/productsController");
const uploadFile = require('../middlewares/multerMid');
const authMid = require('../middlewares/authMid');
const credentialMid = require('../middlewares/credentialsMid');
const createProductValidation = require('../middlewares/createProductValidation');
const editProductValidation = require('../middlewares/editProductValidations');

router.get("/",productsController.home);
router.get("/productDetail/:id",productsController.detail);
router.get("/productCart", authMid ,productsController.cart);
router.get("/dashboard", authMid, credentialMid.adminMid, productsController.dashboard);
router.get('/search', productsController.search)


router.get("/createProduct", authMid, credentialMid.adminMid, productsController.create);
router.post("/", uploadFile.single("imagenProducto"), createProductValidation, productsController.store);

router.get("/editProduct/:id", authMid, credentialMid.adminMid, productsController.edit);
router.patch("/editProduct/:id", editProductValidation, uploadFile.single("imagenProducto"), productsController.modify);

router.delete("/dashboard/:id",productsController.delete);

module.exports = router;