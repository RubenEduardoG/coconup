import Post from './models/Post';

exports.crearPublicacion = async (req, res) => {
  const { imagen, descripcion } = req.body;
  
  try {
    const nuevaPublicacion = new Post({
      imagen,
      descripcion,
      autor: req.usuario.id
    });

    await nuevaPublicacion.save();
    res.status(201).json(nuevaPublicacion);
  } catch (error) {
    res.status(500).json({ msg: 'Error al crear publicación' });
  }
};

exports.obtenerPublicaciones = async (req, res) => {
  try {
    const publicaciones = await Post.find().populate('autor', 'nombre fotoPerfil');
    res.json(publicaciones);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener publicaciones' });
  }
};
