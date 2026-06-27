import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Componentes Globales del Layout
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Páginas de la Aplicación
import Dashboard from "./pages/Dashboard";
import Pedidos from "./pages/Pedidos";
import PQRS from "./pages/PQRS";
import Configuracion from "./pages/Configuracion";

// 📦 Nueva sección de Productos (conectada a MongoDB)
import Productos from "./components/Productos";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Barra de navegación superior */}
      <Header
        onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        closeSidebar={() => setSidebarOpen(false)}
      />

      <div className="layout">
        {/* Menú lateral de navegación */}
        <Sidebar
          menuOpen={sidebarOpen}
          closeSidebar={() => setSidebarOpen(false)}
        />

        {/* Contenedor Principal con el Sistema de Rutas */}
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pedidos" element={<Pedidos />} />
            <Route path="/pqrs" element={<PQRS />} />
            <Route path="/configuracion" element={<Configuracion />} />
            
            {/* 🆕 Ruta para el inventario de productos */}
            <Route path="/productos" element={<Productos />} />
          </Routes>

          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;