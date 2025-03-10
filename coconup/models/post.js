import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  imagen: { type: String, required: true },
  descripcion: { type: String },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

export default mongoose.model('Post', PostSchema);
