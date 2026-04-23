import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Pedidos from "./pages/Pedidos";
import PQRS from "./pages/PQRS";
import Configuracion from "./pages/Configuracion";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="layout">
        <Sidebar menuOpen={sidebarOpen} />

        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pedidos" element={<Pedidos />} />
            <Route path="/pqrs" element={<PQRS />} />
            <Route path="/configuracion" element={<Configuracion />} />
          </Routes>

          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
