const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.registrarUsuario = async (req, res) => {
  const { nombre, correo, contraseña } = req.body;

  try {
    const existeUsuario = await User.findOne({ correo });
    if (existeUsuario) return res.status(400).json({ msg: 'El correo ya está registrado' });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(contraseña, salt);

    const nuevoUsuario = new User({ nombre, correo, contraseña: hash });
    await nuevoUsuario.save();

    res.status(201).json({ msg: 'Usuario registrado correctamente' });
  } catch (error) {
    res.status(500).json({ msg: 'Error al registrar usuario' });
  }
};

exports.loginUsuario = async (req, res) => {
  const { correo, contraseña } = req.body;

  try {
    const usuario = await User.findOne({ correo });
    if (!usuario) return res.status(400).json({ msg: 'Credenciales inválidas' });

    const esCorrecto = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!esCorrecto) return res.status(400).json({ msg: 'Credenciales inválidas' });

    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({ token, usuario: { id: usuario._id, nombre: usuario.nombre } });
  } catch (error) {
    res.status(500).json({ msg: 'Error en el servidor' });
  }
};
