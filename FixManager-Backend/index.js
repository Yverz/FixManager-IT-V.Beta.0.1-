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
  .catch(err => console.error('❌ Error crítico al conectar a MongoDB:', err));

// ========================================== 
// 📦 DEFINICIÓN DEL MODELO (Esquema de la Colección)
// ========================================== 
// Mongoose mapeará esto automáticamente a una colección llamada "productos"
const ProductoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true }
}, { versionKey: false }); // Elimina el campo innecesario __v de Mongoose

const Producto = mongoose.model('Producto', ProductoSchema);

// ========================================== 
// 🟢 GET: Traer todos los documentos desde MongoDB
// ========================================== 
app.get('/api/productos', async (req, res) => { 
  try {
    // Buscamos todos los productos en la base de datos real
    const productosDeMongo = await Producto.find();

    // Mantenemos tu retraso de 800ms para que se aprecie el "Cargando..." en tu React
    setTimeout(() => { 
      res.json(productosDeMongo); 
    }, 800); 

  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener los datos de MongoDB", error });
  }
}); 

// ========================================== 
// 🔵 POST: Insertar un nuevo documento real en MongoDB
// ========================================== 
app.post('/api/productos', async (req, res) => { 
  try {
    const { nombre, precio } = req.body; 

    // Creamos la instancia del producto. 
    // Ya NO necesitas "idSimulado" porque MongoDB genera el _id (ObjectId) por defecto.
    const nuevoProducto = new Producto({ nombre, precio }); 

    // Se almacena físicamente en la nube de Atlas
    const productoGuardado = await nuevoProducto.save(); 

    // Respondemos con éxito tras tus 500ms simulados
    setTimeout(() => { 
      res.status(201).json({ 
        mensaje: "Documento guardado con éxito", 
        producto: productoGuardado 
      }); 
    }, 500); 

  } catch (error) {
    res.status(400).json({ mensaje: "Error al guardar en MongoDB", error });
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

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🔌 ¡Conectado exitosamente a MongoDB Atlas!'))
  .catch(err => {
    console.log("❌ ¡HUBO UN ERROR REAL DE CONEXIÓN! Aquí está:");
    console.error(err);
  });