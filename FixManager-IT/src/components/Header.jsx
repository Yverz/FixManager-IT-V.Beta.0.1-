import { useState, useRef, useEffect } from "react";
import logo from "../assets/LogoY.png";

function Header({ onToggleSidebar, closeSidebar }) {
  const [openMenu, setOpenMenu] = useState(false);

  const userMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const systemStatus = "mantenimiento"; // Cambia esto para probar diferentes estados

  
  useEffect(() => {
    function handleUserMenuClick(event) {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target)
      ) {
        setOpenMenu(false);
      }
    }

    document.addEventListener("mousedown", handleUserMenuClick);
    return () =>
      document.removeEventListener("mousedown", handleUserMenuClick);
  }, []);

 
  useEffect(() => {
    function handleHamburgerClick(event) {
      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        closeSidebar();
      }
    }

    document.addEventListener("mousedown", handleHamburgerClick);
    return () =>
      document.removeEventListener("mousedown", handleHamburgerClick);
  }, [closeSidebar]);

  return (
    <header className="header">

      
      <button
        ref={hamburgerRef}
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
          <span className="brand-it">ServiceDesk▒</span>
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

      
      <div className="user-menu" ref={userMenuRef}>
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
