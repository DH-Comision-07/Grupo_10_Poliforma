const express = require("express");
const router = express.Router();
const main = require("../controllers/mainController");

router.get("/", main.index);
router.get('/contact', main.contact)

module.exports = router;