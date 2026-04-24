import "../styles/Configuracion.css";

function PQRS() {
  return (
    <section className="pQRS">
      <header className="pQRS-header">
        <h1 className="h1-pqrs">PQRS</h1>
        <p className="pqrs-descripcion">
  Gestión de Peticiones, Quejas, Reclamos y Sugerencias relacionadas
  con servicios IT, equipos y soporte técnico.
        </p>
      </header>

     
      <div className="config-card">
        <h2>Registrar nueva solicitud</h2>
        <p>Completa el formulario para generar un caso PQRS.</p>

        <div className="config-group">
          <label>Tipo de solicitud</label>
          <select>
            <option>Peticiones</option>
            <option>Quejas</option>
            <option>Reclamos</option>
            <option>Sugerencias</option>
          </select>
        </div>

        <div className="config-group">
          <label>Área relacionada</label>
          <select>
            <option>Soporte técnico</option>
            <option>Infraestructura</option>
            <option>Equipos y hardware</option>
            <option>Aplicaciones</option>
          </select>
        </div>

        <div className="config-group">
          <label>Descripción del caso</label>
          <textarea
            rows="4"
            placeholder="Describe detalladamente la situación..."
            style={{
              padding: "10px",
              borderRadius: "10px",
              resize: "none",
              background: "rgba(15, 23, 42, 0.8)",
              border: "1px solid rgba(59,130,246,0.25)",
              color: "#e5e7eb",
            }}
          />
        </div>

        <button className="btn-primary">Enviar PQRS</button>
      </div>

     
      <div className="config-card">
        <h2>Estado de solicitudes</h2>
        <p>Consulta el progreso de las PQRS registradas.</p>

        <div className="checkbox">
          <strong>#PQRS-1023</strong> – En revisión
        </div>

        <div className="checkbox">
          <strong>#PQRS-1018</strong> – Asignado a técnico
        </div>

        <div className="checkbox">
          <strong>#PQRS-1009</strong> – Cerrado
        </div>
      </div>

        <div className="config-card">
        <h2>Indicadores PQRS</h2>
        <p>Métricas básicas del sistema.</p>

        <div className="checkbox"> Total registradas este mes: 24</div>
        <div className="checkbox"> Pendientes: 7</div>
        <div className="checkbox"> Cerradas: 17</div>
      </div>

      <div className="config-card danger">
        <h2>Acciones administrativas</h2>
        <p>Opciones disponibles solo para administradores.</p>

        <button className="btn-danger">
          Vaciar historial PQRS
        </button>
      </div>
    </section>
  );
}

export default PQRS;