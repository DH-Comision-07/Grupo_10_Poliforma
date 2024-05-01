const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const credentialMid = require('../middlewares/credentialsMid');
const uploadFile = require('../middlewares/userMulterMid');
const authMid = require('../middlewares/authMid');



router.get("/login", credentialMid.guestMid, usersController.login);
router.post("/login",usersController.loginProcess);

router.get("/register", credentialMid.guestMid, usersController.register);
router.post("/", uploadFile.single("imagenUsuario"), usersController.store);

router.get('/profile/:id', authMid ,usersController.userProfile);

router.get('/dashboard', authMid, credentialMid.adminMid, usersController.dashboard);

router.get('/editProfile/:id', authMid, usersController.editUser);
router.put('/:id',uploadFile.single("imagenUsuario"), usersController.modify);

router.delete('/:id', usersController.deleteUser);

module.exports = router;