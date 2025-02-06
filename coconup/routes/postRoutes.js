const express = require('express');
const { crearPublicacion, obtenerPublicaciones } = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, crearPublicacion);
router.get('/', obtenerPublicaciones);

module.exports = router;
