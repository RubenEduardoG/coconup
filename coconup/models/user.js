import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  fotoPerfil: { type: String, default: '' },
  biografia: { type: String, default: '' },
  seguidores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  seguidos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

export default mongoose.model('User', UserSchema);
