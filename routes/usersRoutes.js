const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// GET: listar usuarios
router.get('/', usersController.obtenerUsuarios);

// POST: agregar usuario
router.post('/', usersController.agregarUsuario);

module.exports = router;
