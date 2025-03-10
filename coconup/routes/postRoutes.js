import express from 'express';
import { crearPublicacion, obtenerPublicaciones } from './controllers/postController';
import authMiddleware from './middleware/authMiddleware';
import router from express.Router();

router.post('/', authMiddleware, crearPublicacion);
router.get('/', obtenerPublicaciones);

export default router;
