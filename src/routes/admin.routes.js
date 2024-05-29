const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const credentialMid = require('../middlewares/credentialsMid');
const controller = require('../controllers/productsController');

router.get('/administrar', credentialMid.adminMid, controllersAdmin.save);


module.exports = router;