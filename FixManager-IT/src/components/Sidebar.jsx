import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";

function Sidebar({ menuOpen, closeSidebar }) {
  const sidebarRef = useRef(null);

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        closeSidebar();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen, closeSidebar]);

  return (
    <aside
      ref={sidebarRef}
      className={`sidebar ${menuOpen ? "open" : ""}`}
    >
      <h1 className="sidebar-brand">
        <span className="sidebar-brand-main">FixManager</span>
        <span className="sidebar-brand-it"> IT™</span>
      </h1>

      <h2>Admin</h2>

      <nav className="sidebar-nav">
        <NavLink to="/" end className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }>
          Panel General
        </NavLink>

        <NavLink to="/pedidos" className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }>
          Pedidos
        </NavLink>

        <NavLink to="/pqrs" className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }>
          PQRS
        </NavLink>

        <NavLink to="/configuracion" className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }>
          Configuración
        </NavLink>
      </nav>

      <button className="MauseHover">Cerrar sesión</button>
    </aside>
  );
}

export default Sidebar;