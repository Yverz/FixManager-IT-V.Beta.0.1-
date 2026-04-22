function Sidebar() {
  return (
    <aside className="sidebar">
    <h1 className="sidebar-brand">
      <span className="sidebar-brand-main">FixManager</span>
      <span className="sidebar-brand-it"> IT®</span>
  </h1>

      <h2>Admin</h2>
      <nav>
        <a href="/dashboard">Panel General</a>
        <a href="/dashboard">Pedidos</a>
        <a href="/dashboard">PQRS</a>
        <a href="/dashboard">Configuración</a>
      </nav>
      <button className="MauseHover">Cerrar sesión</button>
    </aside>
  );
}

export default Sidebar;