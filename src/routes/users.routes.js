const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const credentialMid = require('../middlewares/credentialsMid');

router.get("/login", credentialMid.guestMid, usersController.login);
router.get("/register",usersController.register);

module.exports = router;