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

router.get('/logout', usersController.logout);

router.get('/editProfile/:id', authMid, usersController.editUser);
router.put('/:id',uploadFile.single("imagenUsuario"), usersController.modify);

router.delete('/:id', usersController.deleteUser);

// Crear un usuario
router.post('/', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Leer todos los usuarios
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Leer un usuario por ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Actualizar un usuario por ID
router.patch('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Eliminar un usuario por ID
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;