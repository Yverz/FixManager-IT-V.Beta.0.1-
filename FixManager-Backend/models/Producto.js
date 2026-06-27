const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true }
}, { versionKey: false });

module.exports = mongoose.model('Producto', ProductoSchema);