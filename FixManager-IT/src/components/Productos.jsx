import { useState, useEffect } from "react";
import "./Productos.css";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  const API_URL =
    "https://didactic-fiesta-pjq59q456vr73rx7v-4000.app.github.dev/api/productos";

  const obtenerProductos = async () => {
    try {
      setCargando(true);

      const respuesta = await fetch(API_URL);
      const datos = await respuesta.json();

      setProductos(Array.isArray(datos) ? datos : []);
    } catch (error) {
      console.error("Error al traer productos:", error);
      setProductos([]);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  // 🔵 POST CORREGIDO
  const guardarProducto = async (e) => {
    e.preventDefault();

    if (!nombre || !precio) {
      alert("Por favor, llena todos los campos");
      return;
    }

    try {
      const respuesta = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: nombre.trim(),
          precio: parseFloat(precio),
        }),
      });

      const data = await respuesta.json();

      console.log("RESPUESTA BACKEND:", data);

      if (!respuesta.ok) {
        throw new Error(data.mensaje || "Error al guardar");
      }

      setNombre("");
      setPrecio("");
      obtenerProductos();
      alert("Producto guardado correctamente");
    } catch (error) {
      console.error("ERROR REAL:", error);
      alert("No se pudo guardar. Revisa consola F12.");
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
              <label>Nombre</label>
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Precio</label>
              <input
                type="number"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
              />
            </div>

            <button type="submit">Guardar</button>
          </form>
        </section>

        <section className="lista-card">
          <h2>Productos</h2>

          {cargando ? (
            <p>Cargando...</p>
          ) : (
            <ul>
              {Array.isArray(productos) &&
                productos.map((p) => (
                  <li key={p._id}>
                    {p.nombre} - ${p.precio}
                  </li>
                ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}