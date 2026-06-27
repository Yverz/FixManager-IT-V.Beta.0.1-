import { useState, useEffect } from "react";
import "./Productos.css";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  const API_URL = "https://didactic-fiesta-pjq59q456vr73rx7v-4000.app.github.dev/api/productos";
  
  const obtenerProductos = async () => {
    try {
      setCargando(true);
      const respuesta = await fetch(API_URL);
      if (!respuesta.ok) throw new Error("Error al obtener productos");
      const datos = await respuesta.json();
      setProductos(datos);
    } catch (error) {
      console.error("Error al traer productos:", error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  // 🔵 POST: Versión mejorada y robusta
  const guardarProducto = async (e) => {
    e.preventDefault();
    if (!nombre || !precio) return alert("Por favor, llena todos los campos");

    try {
      const respuesta = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, precio: Number(precio) }),
      });

      const datos = await respuesta.json();

      if (respuesta.ok) {
        setNombre("");
        setPrecio("");
        obtenerProductos();
        alert("Producto guardado exitosamente");
      } else {
        // Aquí capturamos el error real enviado por el backend (ej: validación de Mongoose)
        console.error("Detalle del error:", datos);
        alert(`Error: ${datos.mensaje}. Detalle: ${datos.error || 'Sin detalles'}`);
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("Error de conexión con el servidor. Revisa la consola F12.");
    }
  };

  return (
    <div className="fixmanager-container">
      <header className="productos-header">
        <h1>❄️ FixManager-IT™</h1>
        <p>Área de Gestión de Inventario y Productos</p>
      </header>

      <div className="productos-grid">
        <section className="formulario-card">
          <h2>Registrar Nuevo Producto</h2>
          <form onSubmit={guardarProducto}>
            <div className="input-group">
              <label>Nombre del Producto / Componente</label>
              <input 
                type="text" 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
                placeholder="Ej. Memoria RAM DDR5 16GB"
              />
            </div>
            <div className="input-group">
              <label>Precio (USD)</label>
              <input 
                type="number" 
                value={precio} 
                onChange={(e) => setPrecio(e.target.value)} 
                placeholder="Ej. 85"
              />
            </div>
            <button type="submit" className="btn-guardar">Guardar en Base de Datos</button>
          </form>
        </section>

        <section className="lista-card">
          <h2>Inventario Disponible</h2>
          
          {cargando ? (
            <div className="loader">Cargando productos de MongoDB...</div>
          ) : productos.length === 0 ? (
            <p className="sin-datos">No hay productos registrados en el inventario.</p>
          ) : (
            <div className="tabla-contenedor">
              <table className="tabla-productos">
                <thead>
                  <tr>
                    <th>ID (MongoDB)</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map((prod) => (
                    <tr key={prod._id}>
                      <td className="txt-id">{prod._id}</td>
                      <td className="txt-nombre">{prod.nombre}</td>
                      <td className="txt-precio">${prod.precio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}