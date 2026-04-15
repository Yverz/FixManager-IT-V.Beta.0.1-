import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
    
      <div className="brand-container">
        <img src={logo} alt="Logo FixManager IT" className="logo" />

        <h2 className="brand">
          <span className="brand-main">FixManager-</span>
          <span className="brand-it"> IT</span>
        </h2>
      </div>

      <input type="text" placeholder="Buscar..." />
    
      <span>Hola, Yiver Gaviria</span>
    </header>
  );
}

export default Header;