const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  texto: { type: String, required: true },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  publicacion: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Comment', CommentSchema);
