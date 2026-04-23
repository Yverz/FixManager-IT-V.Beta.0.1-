import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";

function Header({ onToggleSidebar }) {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  const systemStatus = "pruebas";

  // Cerrar menú usuario al hacer click 
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">


    
      <button
        className="MauseHover mobile-menu-btn"
        onClick={onToggleSidebar}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      <div className="brand-container">
        <img src={logo} alt="Logo FixManager IT" className="logo" />

        <h2 className="brand">
          <span className="brand-main">❄</span>
          <span className="brand-it">ServiceDesk</span>
        </h2>
      </div>

      <div className={`system-status ${systemStatus}`}>
        <span className="status-dot"></span>
        {systemStatus === "operativo" && "Sistema operativo"}
        {systemStatus === "mantenimiento" && "Mantenimiento"}
        {systemStatus === "pruebas" && "Modo pruebas"}
      </div>

      <input type="text" placeholder="Buscar..." />

      <span>Hola, Yiver Gaviria!</span>

      {/* MENÚ USUARIO */}
      <div className="user-menu" ref={menuRef}>
        <button
          className="MauseHover"
          onClick={() => setOpenMenu(!openMenu)}
        >
          φ
        </button>

        <div className={`dropdown-menu ${openMenu ? "open" : ""}`}>
          <button>Mi perfil</button>
          <button>Mis pedidos</button>
          <button>Mis PQRS</button>
          <hr />
          <button>Configuración</button>
          <hr />
          <button className="logout">Cerrar sesión</button>
        </div>
      </div>
    </header>
  );
}

export default Header;