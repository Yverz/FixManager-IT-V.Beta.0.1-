import React, { useState } from 'react';
import { useFavoritos } from '../context/FavoritosContext';

const SERVICIOS = [
  { id: 's1', title: 'Reparación de PC', description: 'Diagnóstico y reparación de hardware', price: 30000 },
  { id: 's2', title: 'Instalación de Software', description: 'Instalación y configuración de software', price: 15000 },
  { id: 's3', title: 'Mantenimiento Preventivo', description: 'Limpieza interna y optimización', price: 20000 },
  { id: 's4', title: 'Soporte Remoto', description: 'Asistencia remota rápida', price: 8000 }
];

export default function Catalogo() {
  const [query, setQuery] = useState('');
  const { favoritos, agregar } = useFavoritos();

  const filtered = SERVICIOS.filter((s) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)
    );
  });

  return (
    <section>
      <h2>Catálogo de Servicios</h2>
      <div className="search">
        <input
          aria-label="Buscar servicios"
          placeholder="Buscar..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="grid">
        {filtered.map((s) => {
          const isFav = favoritos.some((f) => f.id === s.id);
          return (
            <article className="card" key={s.id}>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <div className="card-actions">
                <strong>${s.price}</strong>
                <button onClick={() => agregar(s)} disabled={isFav}>
                  {isFav ? 'En Favoritos' : 'Agregar'}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
