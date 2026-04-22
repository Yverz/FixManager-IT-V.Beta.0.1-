import logo from "../assets/logo.png";

function Header() {
 
  const systemStatus = "pruebas"; // Cambia a "mantenimiento" o "pruebas" para probar otros estados

  return (
    <header className="header">
      
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
      <button className="MauseHover">φ</button>
      
    </header>
  );
}

export default Header;
