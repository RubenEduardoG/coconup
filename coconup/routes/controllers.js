const express = require('express');
const { registrarUsuario, loginUsuario } = require('../controllers/userController');
const router = express.Router();

router.post('/registro', registrarUsuario);
router.post('/login', loginUsuario);

module.exports = router;
