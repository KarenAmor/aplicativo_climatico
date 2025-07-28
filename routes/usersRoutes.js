const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usersController');

router.post('/', usuarioController.obtenerUsuarios);
router.post('/', usuarioController.agregarUsuario)

module.exports = router;
