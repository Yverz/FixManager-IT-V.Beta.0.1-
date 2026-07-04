require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// ==========================================
// 🛡️ CORS MANUAL
// ==========================================
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

// ==========================================
// 📦 BODY PARSING (FIX IMPORTANTE)
// ==========================================
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

// ==========================================
// 🔍 DEBUG GLOBAL
// ==========================================
app.use((req, res, next) => {
  console.log("➡️ REQUEST:", req.method, req.url);
  next();
});

// ==========================================
// 🔌 CONEXIÓN A MONGODB
// ==========================================
mongoose.set('bufferCommands', false);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🔌 Conectado a MongoDB Atlas'))
  .catch(err => {
    console.error("❌ ERROR DE MONGODB:");
    console.error(err.message);
  });

// ==========================================
// 📌 RUTA PRINCIPAL
// ==========================================
app.get("/", (req, res) => {
  res.send("🚀 API de Productos funcionando correctamente");
});

// ==========================================
// 📦 MODELO
// ==========================================
const ProductoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true }
}, { versionKey: false });

const Producto = mongoose.model('Producto', ProductoSchema);

// ==========================================
// 🟢 GET PRODUCTOS
// ==========================================
app.get('/api/productos', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener productos",
      error: error.message
    });
  }
});

// ==========================================
// 🔵 POST PRODUCTO (DEBUG REAL)
// ==========================================
app.post('/api/productos', async (req, res) => {
  try {
    console.log("🔥 HEADERS:", req.headers);
    console.log("🔥 BODY RECIBIDO:", req.body);

    const { nombre, precio } = req.body;

    if (!nombre || !precio) {
      return res.status(400).json({
        mensaje: "Faltan campos",
        recibido: req.body
      });
    }

    const nuevo = new Producto({
      nombre: nombre.trim(),
      precio: Number(precio)
    });

    const guardado = await nuevo.save();

    console.log("✅ PRODUCTO GUARDADO:", guardado);

    res.status(201).json({
      mensaje: "Producto guardado",
      producto: guardado
    });

  } catch (error) {
    console.error("❌ ERROR AL GUARDAR:", error.message);

    res.status(500).json({
      mensaje: "Error al guardar",
      error: error.message
    });
  }
});

// ==========================================
// 🚀 SERVIDOR
// ==========================================
const PORT = process.env.PORT || 4000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("🚀 Backend activo");
  console.log(`📡 Puerto: ${PORT}`);
});