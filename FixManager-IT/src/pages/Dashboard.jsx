import { useState, useEffect } from "react";

function Dashboard() {
  const MAX_VISITORS = 80;
  const [visitors, setVisitors] = useState(Math.floor(Math.random() * 20) + 15);
  const [totalToday, setTotalToday] = useState(Math.floor(Math.random() * 80) + 120);

  useEffect(() => {
    let timeout;
    function update() {
      setVisitors(prev => {
        const delta = Math.floor(Math.random() * 5) - 2;
        return Math.max(5, Math.min(MAX_VISITORS, prev + delta));
      });
      setTotalToday(prev => prev + (Math.random() < 0.3 ? 1 : 0));
      timeout = setTimeout(update, 2200 + Math.random() * 1200);
    }
    timeout = setTimeout(update, 400);
    return () => clearTimeout(timeout);
  }, []);

  const visitPct = Math.round((visitors / MAX_VISITORS) * 100);

  return (
    <section className="dashboard">
      <h1>Resumen General</h1>
      <p>Bienvenido al sistema de gestión FixManager‑IT</p>

      {/* KPIs PRINCIPALES */}
      <div className="cards">
        <div className="card">
          <p>Ventas del día</p>
          <h2>666</h2>
          <p style={{ fontSize: "12px" }}>Actualizado hoy</p>
        </div>

        <div className="card">
          <p>Pedidos activos</p>
          <h2>8</h2>
          <p style={{ fontSize: "12px" }}>En proceso</p>
        </div>

        <div className="card">
          <p>PQRS pendientes</p>
          <h2>3</h2>
          <p style={{ fontSize: "12px", color: "#ff5252" }}>
            Requieren atención
          </p>
        </div>

        <div className="card">
          <p>Técnicos disponibles</p>
          <h2>5</h2>
          <p style={{ fontSize: "12px" }}>Turno activo</p>
        </div>

        {/* CONTADOR DE VISITAS */}
        <div className="card" style={{ position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
            <p style={{ margin: 0 }}>Visitas activas</p>
            <span style={{
              display: "inline-flex", alignItems: "center",
              fontSize: "11px", color: "#1D9E75", fontWeight: 500,
              background: "#E1F5EE", padding: "2px 8px", borderRadius: "99px"
            }}>
              <span style={{
                display: "inline-block", width: 8, height: 8,
                borderRadius: "50%", background: "#1D9E75",
                marginRight: 5,
                animation: "pulse 1.4s ease-in-out infinite"
              }} />
              En vivo
            </span>
          </div>
          <h2 style={{ margin: "4px 0 2px" }}>{visitors}</h2>
          <p style={{ fontSize: "12px" }}>{totalToday} visitas totales hoy</p>
          <div style={{ height: 3, borderRadius: 2, background: "#e0e0e0", marginTop: 8, overflow: "hidden" }}>
            <div style={{
              height: "100%", borderRadius: 2, background: "#1D9E75",
              width: `${visitPct}%`, transition: "width 0.6s ease"
            }} />
          </div>
          <style>{`@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.8)} }`}</style>
        </div>
      </div>

      <div className="table-section">
        <h3>Órdenes recientes</h3>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Tipo de servicio</th>
              <th>Técnico</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>Cliente A</td>
              <td>Reparación Hardware</td>
              <td>Téc. Juan</td>
              <td className="status process">En proceso</td>
            </tr>
            <tr>
              <td>002</td>
              <td>Cliente B</td>
              <td>Reparación Software</td>
              <td>Téc. Laura</td>
              <td className="status done">Finalizado</td>
            </tr>
            <tr>
              <td>003</td>
              <td>Cliente C</td>
              <td>PQRS</td>
              <td>—</td>
              <td className="status pending">Pendiente</td>
            </tr>
            <tr>
              <td>004</td>
              <td>Cliente D</td>
              <td>Mantenimiento preventivo</td>
              <td>Téc. Andrés</td>
              <td className="status process">En proceso</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table-section">
        <h3>Estado operativo del sistema</h3>
        <div className="cards">
          <div className="card">
            <p>Órdenes completadas hoy</p>
            <h2>5</h2>
          </div>
          <div className="card">
            <p>Tiempo promedio de atención</p>
            <h2>1.8 h</h2>
          </div>
          <div className="card">
            <p>Satisfacción del cliente</p>
            <h2>92%</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;