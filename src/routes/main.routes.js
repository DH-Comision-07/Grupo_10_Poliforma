const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.index);

//APIS

router.get('/api/users/', mainController.allUsers);
router.get('/api/users/:id', mainController.oneUser);


router.get('/api/products/', mainController.allProducts);
router.get('/api/products/:id', mainController.oneProduct);

module.exports = router;