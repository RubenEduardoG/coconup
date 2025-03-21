import jwt from 'jsonwebtoken';

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');
  
  if (!token) return res.status(401).json({ msg: 'Acceso denegado' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token inválido' });
  }
};
