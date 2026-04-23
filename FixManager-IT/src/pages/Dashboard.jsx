function Dashboard() {
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