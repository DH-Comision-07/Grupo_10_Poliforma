const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const uploadFile = require('../middlewares/userMulterMid');

router.get("/login",usersController.login);
router.get("/register",usersController.register);
router.get('/profile/:id', usersController.userProfile);
router.get('/dashboard', usersController.dashboard);

router.get('/editProfile/:id', usersController.editUser);
router.patch('/profile/:id',uploadFile.single("imagenUsuario"), usersController.modify);

router.delete('/:id', usersController.deleteUser);

module.exports = router;
