import express from 'express';
import { registrarUsuario, loginUsuario } from '../controllers/userController';
import router from express.Router();

router.post('/registro', registrarUsuario);
router.post('/login', loginUsuario);

export default router;
