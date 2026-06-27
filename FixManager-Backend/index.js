require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// ==========================================
// 🛡️ CONFIGURACIÓN DE CORS (Soluciona el error F12)
// ==========================================
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// ==========================================
// 🔌 CONFIGURACIÓN DE CONEXIÓN A MONGODB
// ==========================================
mongoose.set('bufferCommands', false);

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000,
  connectTimeoutMS: 10000,
  maxPoolSize: 10
})
  .then(() => console.log('🔌 ¡Conectado exitosamente a MongoDB Atlas!'))
  .catch(err => {
    console.error("❌ ¡ERROR CRÍTICO DE CONEXIÓN!");
    console.error(err.message);
  });

// ==========================================
// 📦 DEFINICIÓN DEL MODELO
// ==========================================
const ProductoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true }
}, { versionKey: false });

const Producto = mongoose.model('Producto', ProductoSchema);

// ==========================================
// 🟢 GET: Traer todos los productos
// ==========================================
app.get('/api/productos', async (req, res) => {
  try {
    const productosDeMongo = await Producto.find();
    res.json(productosDeMongo);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener los datos", error: error.message });
  }
});

// ==========================================
// 🔵 POST: Insertar un nuevo producto
// ==========================================
app.post('/api/productos', async (req, res) => {
  try {
    console.log("Datos recibidos:", req.body);

    if (!req.body.nombre || !req.body.precio) {
      return res.status(400).json({ mensaje: "Faltan campos obligatorios" });
    }

    const nuevoProducto = new Producto(req.body);
    const productoGuardado = await nuevoProducto.save();

    res.status(201).json({
      mensaje: "Documento guardado con éxito",
      producto: productoGuardado
    });

  } catch (error) {
    console.error("Error al guardar:", error.message);
    res.status(400).json({ 
      mensaje: "Error al guardar en MongoDB", 
      error: error.message 
    });
  }
});

// ==========================================
// 🚀 LEVANTAR EL SERVIDOR
// ==========================================
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Backend REAL activo.`);
  console.log(`📡 Escuchando en: http://localhost:${PORT}/api/productos`);
});