function Dashboard() {
  return (
    <section className="dashboard">
      <h1>Resumen General</h1>
      <p>Bienvenido al sistema</p>
      
      <div className="cards">
        <div className="card">
          <p>Ventas del día</p>
          <h2>$1190</h2>
        </div>

        <div className="card">
          <p>Pedidos activos</p>
          <h2>8</h2>
        </div>

        <div className="card">
          <p>PQRS pendientes</p>
          <h2>3</h2>
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
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>Cliente A</td>
              <td>Reparación Hardware(Mantenimiento)</td>
              <td>En proceso</td>
            </tr>
            <tr>
              <td>002</td>
              <td>Cliente B</td>
              <td>Reparación Software(Formateo/Instalación)</td>
              <td>Finalizado</td>
            </tr>
            <tr>
              <td>003</td>
              <td>Cliente C</td>
              <td>PQRS</td>
              <td>Pendiente</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Dashboard;