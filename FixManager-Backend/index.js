require('dotenv').config(); // Lee la URI de MongoDB desde el archivo .env
const express = require('express'); 
const cors = require('cors'); 
const mongoose = require('mongoose'); // Importamos Mongoose para conectar MongoDB

const app = express(); 

// Middlewares 
app.use(cors()); 
app.use(express.json()); 

// ========================================== 
// 🔌 CONEXIÓN REAL A MONGODB ATLAS
// ========================================== 
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🔌 ¡Conectado exitosamente a MongoDB Atlas!'))
  .catch(err => {
    console.log("❌ ¡HUBO UN ERROR REAL DE CONEXIÓN! Aquí está:");
    console.error(err);
  });

// ========================================== 
// 📦 DEFINICIÓN DEL MODELO (Esquema de la Colección)
// ========================================== 
const ProductoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true }
}, { versionKey: false }); 

const Producto = mongoose.model('Producto', ProductoSchema);

// ========================================== 
// 🟢 GET: Traer todos los documentos desde MongoDB
// ========================================== 
app.get('/api/productos', async (req, res) => { 
  try {
    const productosDeMongo = await Producto.find();
    setTimeout(() => { 
      res.json(productosDeMongo); 
    }, 800); 
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener los datos de MongoDB", error: error.message });
  }
}); 

// ========================================== 
// 🔵 POST: Insertar un nuevo documento real en MongoDB
// ========================================== 
app.post('/api/productos', async (req, res) => { 
  try {
    // ESTO TE AYUDARÁ A DEPURAR: Verás en la consola del servidor qué envía el frontend
    console.log("Datos recibidos en el backend:", req.body);

    const { nombre, precio } = req.body; 

    const nuevoProducto = new Producto({ nombre, precio }); 
    const productoGuardado = await nuevoProducto.save(); 

    setTimeout(() => { 
      res.status(201).json({ 
        mensaje: "Documento guardado con éxito", 
        producto: productoGuardado 
      }); 
    }, 500); 

  } catch (error) {
    // Ahora enviamos error.message para que el frontend no muestre {}
    console.error("Error al intentar guardar:", error.message);
    res.status(400).json({ mensaje: "Error al guardar en MongoDB", error: error.message });
  }
}); 

// ========================================== 
// 🚀 LEVANTAR EL SERVIDOR DE NODE
// ========================================== 
const PORT = process.env.PORT || 4000; 
app.listen(PORT, () => { 
  console.log(`🚀 Backend REAL activo.`); 
  console.log(`📡 Escuchando en: http://localhost:${PORT}/api/productos`); 
  console.log(`(Presiona CTRL+C para detener el servidor)`); 
});