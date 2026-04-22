function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span>© {new Date().getFullYear()} FixManager IT</span>
        <span className="footer-separator">·</span>
        <span>ServiceDesk Platform</span>
      </div>

      <div className="footer-center">
        <span>Versión 1.0.0</span>
        <span className="footer-separator">·</span>
        <span className="footer-status online">Sistema operativo</span>
      </div>

      <div className="footer-right">
        <span>Entorno de pruebas</span>
        <span className="footer-separator">·</span>
        <span>Soporte interno</span>
      </div>
    </footer>
  );
}

export default Footer;